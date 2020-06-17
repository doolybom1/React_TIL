function print(person) {
  if (person == undefined || person == null) {
    console.log("값이 없음");
    return;
  }
  console.log(person.name);
}

const person = null;
print(person);

// 위의 코드를 아래와 같이 줄여서 쓸 수 있음. falsy한 값(null , undefined)은 !를 붙여주면 true로 전환된다.
function print(person) {
  if (!person) {
    console.log("값 없음");
    return;
  }
  console.log(person.name);
}

const person = null;
print(person);

// false
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);

const value = {
  a: 1,
};
const truthy = !!value;
console.log(truthy); // true

console.log(true && "hello"); // hello
console.log(false && "hello"); // false
console.log("hello" && "bye"); // bye
console.log(null && "hello"); // null
console.log(undefined && "hello"); // undefined
console.log("" && "hello"); // ''
console.log(0 && "hello"); // 0
console.log(1 && "hello"); // hello
console.log(1 && 1); // 1

const namelessDog = {
  name: "",
};

/* ----------------------------------------------------------- */
function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return "이름이 없는 동물입니다";
  }
  return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.

// 위의 코드를 || 를 사용하여 줄일 수 있음
// A || B 는 만약 A 가 Truthy 할경우 결과는 A  반면, A 가 Falsy 하다면 결과는 B 가 됩니다.
const namelessDog = {
  name: "",
};

function getName(animal) {
  const name = animal && animal.name;
  return name || "이름 없는 동물입니다.";
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.

/* ------------------------------------------------------------------------ */
// ES5
function calculateCircleArea(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}
const area = calculateCircleArea();
console.log(area);

// ES6
function calculateCircleArea(r = 1) {
  return Math.PI * r * r;
}
const area = calculateCircleArea();
console.log(area);

// 화살표 함수
const calculateCircleArea = (r = 1) => Math.PI * r * r;
const area = calculateCircleArea();
console.log(area);

/*------------------------------------------------------------ */
function isAnimal(text) {
  return (
    text === "고양이" || text === "개" || text === "거북이" || text === "너구리"
  );
}

console.log(isAnimal("개")); // true
console.log(isAnimal("노트북")); // false

function isAnimal(text) {
  const animal = ["고양이", "개", "거북이", "너구리"];
  return animal.includes(text);
}

console.log(isAnimal("개")); // true
console.log(isAnimal("노트북")); // false

// 화살표 함수
const isAnimal = (text) => ["고양이", "개", "거북이", "너구리"].includes(text);

console.log(isAnimal("개")); // true
console.log(isAnimal("노트북")); // false

function makeSound(animal) {
  const tasks = {
    개() {
      console.log("멍멍");
    },
    고양이() {
      console.log("고양이");
    },
    비둘기() {
      console.log("구구 구 구");
    },
  };
  if (!tasks[animal]) {
    console.log("...?");
    return;
  }
  tasks[animal]();
}

makeSound("개");
makeSound("비둘기");

const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);
