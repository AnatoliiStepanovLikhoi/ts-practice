// При створенні зміною тип якої не відомий під час
// написання програми можна використовувати
// тип даних any. Такий тип зручно застосовувати в ситуаціях,
// коли значення вводиться користувачем
// виходить у результаті роботи іншої бібліотеки.
// Такий тип даних не проходить перевірку під час компіляції.

let someValue: any = 'Hello world'; // string
someValue = false; // boolean
someValue = 100; // number
// console.log(someValue); // 100

// ok
someValue.toFixed();

// Помилка на етапі виконання
// TypeError: someValue.toFixed is not a Function
someValue = 'test';
// someValue.toFixed();

//!Linked list implementation

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

class Sorter1 {
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

class Nodes {
  next: Nodes | null = null;

  constructor(public data: number) {}
}

class LinkedList {
  head: Nodes | null = null;

  add(data: number): void {
    const node = new Nodes(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number) {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Nodes | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List if empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Nodes | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter1(linkedList);
sorter.sort();
linkedList.print();
