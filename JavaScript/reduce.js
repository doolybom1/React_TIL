const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum);

// 첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수, 두번째 파라미터는 reduce 함수에서 사용할 초깃값
const numbers2 = [1, 2, 3, 4, 5];
let sum2 = numbers2.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);


const numbers3 = [1, 2, 3, 4, 5];
let sum3 = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum3);


