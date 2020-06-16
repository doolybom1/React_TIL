// splice 기존 배열을 건드림
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 1);
console.log(spliced);
console.log(numbers);


// slice 기존 배열을 건드리지 않음
const numbers1 = [10, 20, 30, 40];
const sliced = numbers1.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers1); // [10, 20, 30, 40]