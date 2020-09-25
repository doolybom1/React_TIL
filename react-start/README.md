#### 논리 && 연산자로 If를 인라인으로 표현

JavaScript에서 true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가됩니다. 따라서 && 뒤의 엘리먼트는 조건이 true일때 출력이 됩니다. 조건이 false라면 React는 무시합니다.

https://ko.reactjs.org/docs/conditional-rendering.html

   
#### NumberList.js
key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 함(대부분의 경우 데이터의 ID를 key로 사용)

렌더링 한 항목에 대한 안정적인 ID가 없다면 최후의 수단으로 항목의 인덱스를 key로 사용할 수 있음
```
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```
https://ko.reactjs.org/docs/lists-and-keys.html