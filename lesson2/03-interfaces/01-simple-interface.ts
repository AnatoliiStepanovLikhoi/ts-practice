// -------------------------------------------
// Без інтерфейса
// -------------------------------------------
// obj: { name: string } - параметр obj має бути об'єктом із властивістю name рядкового типу
function printValue1(obj: { name: string }) {
  console.log(obj.name);
}

const myObj1 = { value: 10, name: 'Hello World' };
printValue1(myObj1); // myObj1 має властивість name

const myObj2 = { data: 10, name2: 'Hello World' };
// printValue1(myObj2); // myObj2 не може використовуватися як параметр, тому що не має властивості name

// -------------------------------------------
// З інтерфейсом
// -------------------------------------------
// визначаємо інтерфейс NamedValue
// Цей інтерфейс можна розглядати як вимоги до об'єктів мати властивість з ім'ям name типу string
interface NamedValue {
  name: string;
}

// функція printValue2 приймає параметр типу NamedValue
// як параметр можна передати екземпляр класу, який реалізував інтерфейс
// або об'єкт, який за своєю структурою підходить під вказаний інтерфейс. Використовувати приведення типів як у більшості інших мов не потрібно
function printValue2(obj: NamedValue): void {
  console.log(obj.name);
}

printValue2(myObj1); // myObj1 має властивість name
// printValue2(myObj2); // myObj2 не може використовуватися як параметр, тому що не має властивості name

const myObj3: NamedValue = { name: 'World' };
printValue2(myObj3); // myObj3 реалзіує інтерфейс NamedValue

//Fixing annotations

interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;

  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  trim: 'sport',

  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,

  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);

  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
