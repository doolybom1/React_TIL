// shift 첫번째 원소를 배열에서 추출
const numbers = [10,20,30,40];
const value = numbers.shift();
console.log(numbers);// [ 20, 30, 40 ]
console.log(value); // 10

// pop 맨 마지막 원소를 배열에서 추출
const numbers2 = [10,20,30,40];
const value2 = numbers2.pop();
console.log(numbers2); // [ 10, 20, 30 ]
console.log(value2); // 40

// unshift 맨 앞에 새 원소를 추가
const numbers3 = [10, 20, 30, 40];
numbers3.unshift(5);
console.log(numbers3); // [ 5, 10, 20, 30, 40 ]