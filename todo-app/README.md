### 필요한 라이브러리
```
node-sass : sass 사용
classnames : 조건부 스타일링
react-icons : 리액트 아이콘 사용
```

### 컴포넌트의 성능 최적화 작업 (App.js 확인)
1. useState를 사용한 상태 업데이트
2. useReducer 사용

### react-virtualized 렌더링 최적화
데이터가 많을시 스크롤을 해야만 보이는 데이터들이 같이 렌더링 된다.
react-virtualized를 사용하면 스크롤되기 전 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하게 됨.