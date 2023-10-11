// import { Sorter } from './Sorter';
// import { NumbersCollection } from './NumbersCollection';

function let1() {
  //   console.log(i); // Cannot find name 'i'
  //   console.log(test); // Cannot find name 'test'

  for (let i = 0; i < 10; i++) {
    let test = i;
  }

  //   console.log(i); // Cannot find name 'i'
  //   console.log(test); // Cannot find name 'test'
}

// let1();

// Повторне визначення змінної не призводить до помилки.
function let2() {
  let a = 10;
  // Cannot redeclare block-scoped variable 'a'
  //   let a = 20;
  console.log(a); // 10
}

// let2();

// 0, 1, 2, 3, 4
function let3() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
}

// let3();

//Sorting function

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

class NumbersCollection {
  constructor(public data: number[]) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}

class CharactersCollection {
  constructor(public data: string) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
}

// const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
