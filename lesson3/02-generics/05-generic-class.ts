class KeyValuePair<TKey, TValue> {
  private _key: TKey;

  public set key(value: TKey) {
    if (value === null || value === undefined) {
      throw new Error('Значення value не може бути порожнім');
    }
    this._key = value;
  }

  public get key(): TKey {
    return this._key;
  }

  private _value: TValue;

  public set value(value: TValue) {
    if (value === null || value === undefined) {
      throw new Error('Значення value не може бути порожнім');
    }
    this._value = value;
  }

  public get value(): TValue {
    return this._value;
  }
}

const strAndNum = new KeyValuePair<string, number>();
strAndNum.key = 'key1';
strAndNum.value = 123;

console.log(strAndNum.value);

// strAndNum.value = "123";
// strAndNum.key = null;

//Some more on generics
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

//any shape possible
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const collectionOfAnything = new ArrayOfAnything(['a', 'c', 'b']);

console.log(collectionOfAnything.get(1));
