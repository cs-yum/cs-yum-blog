---
title: React-Query hook 관리하기 (feat. axios)
description: 이 글에선 React-Query hook을 관리하는 방법에 대해 공부합니다.
slug: react-query-hook-관리
authors: 최지훈
tags: [React-Query hook, hook 관리 컨벤션]
image: /img/logo.svg
---

## 들어가며
- [React-Query를 활용한 서버 상태 관리](https://cs-yum-blog.vercel.app/blog/%EC%84%9C%EB%B2%84-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC) 글을 작성하면서 공부한 내용을 실제 야놀자 클론 코딩 프로젝트에 적용해 보았습니다.
- 컴포넌트와 React-Query hook, axios 로직을 분리하여 관리했던 경험과 장단점을 함께 다룹니다.

## 고민한 내용
### React-Query hook 분리
- React-Query hook 사용법을 이해하는 것을 넘어서 어떻게 하면 효율적으로 관리할 수 있을지 고민해 보았습니다.
- React-Query에서 제공해주는 hook인 useQuery와 useMutation을 리액트 컴포넌트 안에서 바로 사용할 수 있지만, hook에 사용되는 코드가 비지니스 로직이라면 컴포넌트와 분리할 필요가 있다고 판단하였습니다.
- 이에 React-Query hook에 작성되는 코드가 View 로직에 가까운지 비지니스 로직에 가까운지 생각해 보았습니다.

```tsx
const Cart = () => {
  const {
    data: cartData,
    isLoading,
  } = useQuery({
    queryKey: ["fetchCarts"],
    queryFn: async (): Promise<CartData> => {
      const { data }: { data: FetchCartResult } = await authInstance.get("carts");
      return data.data;
    },
  });

  return !isLoading && cartData ? (
    <장바구니 View>
  ) : (
    <로딩 View>
  );
};

export default Cart;
```

- 위 코드가 지금은 간단해 보이는 코드이지만, 만약 조금이라도 View 혹은 비지니스 로직이 추가되면 아주 복잡한 컴포넌트가 될 가능성이 높다고 생각하였습니다.
- 따라서 View에 영향을 주는 부분과 그렇지 않는 코드 (비지니스 로직)을 아래와 같이 분리해 보았습니다.

#### View 로직
- API 요청 이후 최종적으로 받아오는 cartData
- API 요청 상태의 로딩 상태를 알려주는 isLoading
- Cart 컴포넌트의 return 값

#### 비지니스 로직
- useQuery의 queryKey, queryFn 또한 이후에 사용될 수도 있는 options
- axios를 활용한 비동기 요청 함수
- 비지니스 로직에서도 useQuery에서 onError, onSuccess 등과 같은 options들이 추가적으로 사용될 수 있기 때문에 비동기 요청 함수 또한 따로 분리하는 것이 좋다고 판단하였습니다.

- 위와 같이 로직을 분리하여 생각하고 아래와 같이 각 로직을 관리해 보았습니다.

```tsx
// 컴포넌트

const Cart = () => {
  const {
    data: cartData,
    isLoading,
  } = useFetchCarts();

  return !isLoading && cartData ? (
    <장바구니 View>
  ) : (
    <로딩 View>
  );
};

export default Cart;
```

```tsx
// React-Query hook

export const useFetchCarts = () =>
  useQuery({
    queryKey: ["fetchCarts"],
    queryFn: () => fetchCarts(),
  });
```

```tsx
// axios API 호출

export const fetchCarts = async (): Promise<CartData> => {
  const { data }: { data: FetchCartResult } = await authInstance.get("carts");

  return data;
};
```

#### 효과
- 컴포넌트에서는 view 로직을, hook과 비동기 처리에서는 비지니스 로직을 따로 집중해서 관리할 수 있게 되었습니다.
- 컴포넌트의 경우 공통 컴포넌트로 사용헤야하는 상황이 오면 쉽게 대응할 수 있게 되었습니다.
- 또한 에러 처리를 할 때, 404 페이지로 이동하거나 toast를 보여준다거나 하는 View와 관련된 에러는 컴포넌트에서 관리하고, 이 외의 에러처리에 대해서는 useQuery의 onError를 활용하여 에러 관리를 할 수 있게 되었습니다.

  ```tsx
  // 컴포넌트

  const Cart = () => {
    const {
      data: cartData,
      isLoading,
      isError
    } = useFetchCarts();

    if (isError) {return "View 에러 처리"}

    return !isLoading && cartData ? (
      <장바구니 View>
    ) : (
      <로딩 View>
    );
  };

  export default Cart;
  ```

  ```tsx
  // React-Query hook

  export const useFetchCarts = () =>
    useQuery({
      queryKey: ["fetchCarts"],
      queryFn: () => fetchCarts(),
      onError: "View 이외 에러 처리 함수"
    });
  ```
