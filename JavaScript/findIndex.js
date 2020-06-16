/* 
    배열 안에 있는 값이 숫자, 문자열, 또는 불리언이라면 찾고자하는 항목이 몇번째 원소인지 알아내려면 indexOf 를 사용하면 됩니다. 
    하지만, 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 로 찾을 수 없습니다.
*/

const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];
  
  const index = todos.findIndex(todo => todo.id === 3);
  console.log(index);