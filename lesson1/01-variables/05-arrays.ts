// масив рядкових значень
let year: (string | number)[];
year = ['January', 'February', 'March', '...'];

// Type 'number' is not assignable to type 'string'.
year = [1, 'January', 'February', 'March', '...'];

console.log(year);

const list: number[] = [1, 2, 3]; // визначення числового масиву та його ініціалізація
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// створення масиву використовуючи generic тип даних Array
const values: Array<number | string> = [-1, -2, -3];
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// вкладені масиви
// const nested: number[][] = [[1], [2], [3]];
const nested: Array<Array<number>> = [[1], [2], [3]];
for (let i = 0; i < nested.length; i++) {
  console.log(nested[i]);
}

//?Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

//?Classes
class Car {}
let car: Car = new Car();

//?Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
