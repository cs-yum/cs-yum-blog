---
title: React-Query를 활용한 서버 상태 관리
description: 이 글에선 React-Query를 활용한 서버 상태 관리에 대해 공부합니다.
slug: 서버-상태-관리
authors: 최지훈
tags: [상태 관리, 서버 상태 관리, React-Query]
image: /img/logo.svg
---

## 들어가며

### 💡 **[React Query와 상태관리 (배민근)](https://www.youtube.com/watch?v=MArE6Hy371c&t=626s)를 시청한 이유**
1. 야놀자 클론 코딩 프로젝트를 진행하면서 장바구니 구현을 담당하였고, 서버 상태 관리에 React Query를 도입하기 위해 시청하게 되었습니다.
2. 짧은 개발 기간 안에 구현을 해야했으므로 이미 많은 사람들이 인정한 정보를 빠르게 습득하고, 문법상으로 변경된 부분이나 추가적으로 필요한 부분은 공식 문서를 읽어 공부하는 방식을 선택하였습니다.

### 💡 **요약**
- Client State와 Server State 구분하기.
- React-Query 사용 시 주요 개념 네 가지인 Queries (useQuery), Mutations (useMutation), Query Invalidation, Caching과 Synchronization를 기억하자.

## 주요 내용

### FE에서 상태관리란?
#### 상태
- 주어진 시간에 대한 시스템을 나타내는 것(객체 등의 데이터)으로 언제든지 변경될 수 있다.
- 상태들은 시간에 따라 변화한다.

#### 상태 관리
- 상태를 관리하는 방법이다.
- 리액트에선 상태 관리가 단반향 바인딩으로 진행되므로 props drilling 이슈가 존재한다.

### Client State vs. Server State
#### Client State

- Client에서 소유하며 온전히 제어 가능하다.
- 초기값 설정이나 조작에 제약사항 없다.
- 다른 사람과 공유되지 않으며 Client 내에서 사영자 인터렉션에 따라 변할 수 있다.
- 항상 Client 내에서 최신 상태로 관리된다.

#### Server State

- client에서 제어하거나 소유되지 않은 원격의 공간에서 관리되고 유지된다.
- Fetching이나 Updating에 비동기 API가 필요하다.
- 다른 사람과 공유되는 것으로 사용자가 모르는 사이에 변경될 수 있다.

### React-Query
#### 소개
- fetching, caching, synchronizing and updating server state (global state와 관련없이)

#### 대표 예시 (공식 문서 예제)
```tsx
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Example />
		</QueryClientProvider>
	)
}

function Example() {
	const { isLoading, error, data } = useQuery('repoData', () => fetch('api').then(res => res.json()));
	
	if (isLoading) return 'Loading...'

	if (error) return 'An error has occurred: ' + error.message

	return (
		<>
			<h1>{data.name}</h1>
			<p>{data.description}</p>
		</>
	)
}
```

#### 주요 개념 네 가지
1. Queries (useQuery)
2. Mutations (useMutation)
3. Query Invalidation
4. Caching과 Synchronization

### 1. Queries (useQuery)
- Queries는 데이터 Fetching 용이다.

```tsx
// 반환값 및 options
// 공식 문서 : https://tanstack.com/query/v4/docs/react/reference/useQuery

const {
	data,
	error,
	isError,
	isLoading,
	isSuccess,
	status,
	...
} = useQuery({
  queryKey,
  queryFn,
  cacheTime,
  onError,
  onSuccess,
  staleTime,
  useErrorBoundary,
	...
})

// ex
const { data: cartData, error, status } =useQuery({
    queryKey: ["fetchCarts"],
    queryFn: fetchCarts,
  })
```

- React Query는 queryKey에 따라 query caching을 관리한다.
- queryFn는 Primise를 반환하는 함수로, 데이터를 resolve하거나 error를 throw 한다.
- useQuery를 여러개 선언하여 사용해도 병렬적으로 사용이 가능하다.

### 2. Mutations (useMutation)
- Mutations은 데이터를 생성/수정/삭제하는 용도이다.

```tsx
// 반환값 및 options는 useQuery와 유사하고 더 적다.
// 공식 문서 : https://tanstack.com/query/v4/docs/react/reference/useMutation

// ex
useMutation({
    mutationFn: deleteCarts,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fetchCarts"] }),
  })
```

- 다음 내용에 나오겠지만, onSuccess와 queryClient.invalidateQueries()를 활용하면 mutate 후 명시한 queryKey를 가진 query 상태들을 업데이트(refatch) 할 수 있다.

### 3. Query Invalidation
- useMutation을 통해 데이터를 업데이트하고 나면, 기존에 캐시된 데이터를 교체(무효화, invalidate)해주어야 하는데, queryClient의 invalidateQueries 메서드를 사용한다.
- 이러면 해당 queryKey를 가진 query는 stale(신선하지 않은) 취급되고, 현재 rendering 되고 있는 query들은 백드라운드에서 refetch 된다.

### 4. Caching과 Synchronization
**cacheTime**
- 사용자가 없을 때 카운트된다.
- 사용자가 창을 나갔을 때, 메모리에 얼마만큼 있을건지 (default 5분, 해당 시간 이후 GC에 의해 처리)

**staleTime**
- 사용자가 화면에 있을 때 카운트된다.
- 얼마의 시간이 흐른 후에 데이터를 stale 취급할 것인지 (default 0)

**refetchOnMount, refetchOnWindowFocus, refetchOnReconnect** (default true)
- Mount, window focus, reconnect 시점에 data가 stale이라고 판단되면 모두 refetch

**React Query의 API 호출 관리법**
- 동일한 쿼리를 사용하는 A, B 컴포넌트가 있을 때, A 컴포넌트가 mount되고 staleTime 안에 B 컴포넌트가 mount 되면 API 호출이 발생하지 않는다. 이는 QueryClient 내부적으로 Context를 사용하여 query를 전역적으로 다루기 때문이다.

	![React Query의 API 호출 관리법](https://github.com/JitHoon/git-test/assets/101972330/11a0437c-2c82-4080-8d25-825c09b4c613)

## 영상을 보고
### 💡 실제 적용 사례
[React-Query hook 관리하기 (feat. axios)](https://cs-yum-blog.vercel.app/blog/react-query-hook-%EA%B4%80%EB%A6%AC) 글로 이어지는 내용입니다.
