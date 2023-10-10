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

class Sorter {
  constructor(public collection: number[] | string) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //If collection is array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        //If collection is array of string
        if (typeof this.collection === 'string') {
          this.collection;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);

sorter.sort();

console.log(sorter.collection);
