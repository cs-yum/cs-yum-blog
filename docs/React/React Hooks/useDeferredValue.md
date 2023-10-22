## 🧑🏻‍💻 useDeferredValue
---

> `useDeferredValue` 는 UI 일부의 업데이트를 지연시킬 수 있는 React 훅이다.

### ✅ useDeferredValue 문법

```tsx
const deferredValue = useDeferredValue(value)
```

- `value`는 지연시키려는 값으로, 어떤 타입이든 가질 수 있다.
- 업데이트가 발생하면 React는 먼저 이전 값으로 리렌더링을 시도하고, 그 다음 백그라운드에서 다시 새 값으로 리렌더링을 시도한다.

## 🧑🏻‍💻 알고 가기
---

### ✅ useDeferredValue는 언제 사용 하는가?

- `lazy`를 사용한 지연 로딩 컴포넌트 코드 작성 시
- Relay 및 Next.js와 같은 Suspense 지원 프레임워크를 사용하여 데이터를 가져올 때
- 새 콘텐츠가 로딩 되는 동안 오래된 콘텐츠 표시할 때 (한 단계 아래 캐싱)

### ✅ 주의 사항

- `useDeferredValue`에 전달하는 값은 문자열 및 숫자와 같은 원시값이거나, 컴포넌트의 외부에서 생성된 객체여야 한다. 렌더링마다 참조 값이 달라지는 새 객체를 바로 `useDeferredValue`에 전달하면 불필요한 백그라운드 리렌더링이 발생할 수 있다.
- `useDeferredValue`는 추가 네트워크 요청을 막지 않는다. 즉 이전 값을 사용하여 렌더링하고 있는 순간에 새 값을 받으면 백그라운드에서 새 값으로 다시 렌더링하도록 예약한다.
- `<Suspense>`와 함께 사용 시, 새 값으로 인한 백그라운드 업데이트로 인해 UI가 일시 중단되면 사용자에게 폴백이 표시되지 않는다. 대신 데이터가 로드될 때까지 기존 UI가 표시된다.
- 백그라운드 리렌더링 후 화면에 커밋될 때까지 Effect를 실행하지 않는다.

## 🧑🏻‍💻 활용 및 생각할 거리

---

### ✅ Input 값을 지연시키는 동작 단계와 유의 사항를 알아보자

```tsx
import { Suspense, useState, useDeferredValue } from 'react';
import SearchResults from './SearchResults.js';

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
	// 사용자 입력값과 현재 화면의 값(이전 값)이 다를 때 흐리게 보여줌
  const isStale = query !== deferredQuery;
	
  return (
    <>
      <label>
        Search form:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div style={{
          opacity: isStale ? 0.5 : 1,
          transition: isStale ? 'opacity 0.2s 0.2s linear' : 'opacity 0s 0s linear'
        }}>
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </>
  );
}
```

- 사용자가 input form에 `"ab"` 를 작성하였다.
- React는 새로운 `query`(`"ab"`)가 아닌 이전 `deferredQuery`( `"a"`)로 다시 렌더링한다.
- React가 백그라운드에서 `query`와 `deferredQuery`를 모두 `"ab"`로 ‘동일하게 업데이트한 상태로 리렌더링을 완료’하게 되면 이를 화면에 표시한다.
    
    
- 유의할 점은 각 키 입력마다 네트워크 요청이 여전히 존재한다는 점이다. 여기서 지연되는 것은 네트워크 요청 자체가 아니라 결과를 화면에 표시하는 것이다.
- 만약 사용자의 입력으로 백그라운드 렌더링이 일시 중단되면, React는 입력에 대한 렌더링 예약을 한 후 기존 렌더링을 다시 시도한다.
- 이때 사용자는 최신 값과 지연 값이 동일한 상태의 렌더링이 준비될 때까지 지연된 UI를 보게 된다.
- 따라서 사용자가 계속 입력하더라도 각 키 입력에 대한 응답은 모두 캐시되고, 백스페이스를 누르면 이전 값을 다시 가져오지 않는다.

### ✅ 디바운스 및 쓰로틀과 어떤 점이 다를까?

#### ✏️ 디바운스
- 사용자가 타이핑을 멈출 때까지(예: 1초 동안) 기다렸다가 렌더링을 한다.

#### ✏️ 쓰로틀
- 일정한 시간 간격으로(예: 최대 1초에 한 번) 렌더링을 한다.

#### ✏️ `useDeferredValue` 
- 사용자의 input 값의 속도에 맞게 렌더링을 한다.

- 즉 디바운스나 쓰로틀과 달리 고정된 지연 시간을 고려할 필요가 없다.
- 예를 들어 사용자의 기기가 빠른 경우, 지연된 리렌더링은 거의 즉시 발생하기 때문에 눈에 띄지 않는다. 반면 사용자의 기기가 느린 경우, 목록이 input 값이 완성되는 것에 맞춰 렌더링 할 수 있게 된다.

- 하지만 디바운스 및 쓰로틀은 네트워크 요청을 더 적게 실행할 수 있다는 점에서 여전히 유용하다. 이처럼 디바운스나 쓰로틀은 경우에 따라 유용하지만, `useDeferredValue`는 React 자체와 깊게 통합되어 있고 사용자의 기기에 맞게 조정되기 때문에 렌더링을 최적화하는 데 더 적합하다.