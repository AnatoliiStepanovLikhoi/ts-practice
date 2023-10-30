// звичайна функція
function add1(x, y) {
  return x + y;
}

const result1 = add1(1, 2);
console.log(result1);

// Типізована функція. Приймає два аргументи типу number та повертає значення типу number
function add2(x: number, y: number): number {
  return x + y;
  //   return "hello world"
}

const result2: number = add2(10, 20);
// const result2: number = add2(10); // очікується два параметри
// const result2: number = add2(10, "text"); // другий аргумент має бути числовим
// const result2: string = add2(10, 20); // результат роботи функції не може бути наданий рядковою змінною
console.log(result2);

//*Functions
const logNumber = (i: number): void => {
  console.log(i);
};

//*When use annotations

// 1.When function return 'any'
const json = '{"x": 10, "y": 20}';
const cordinate: { x: number; y: number } = JSON.parse(json);
console.log(cordinate);

// 2. When we declare a variable on one line and initilize later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3.Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
