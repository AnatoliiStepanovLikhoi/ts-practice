class User {
  firstName: string; // властивість
  lastName: string; // властивість

  // метод
  print(): void {
    console.log(this.firstName + ' ' + this.lastName);
  }
}

const user1 = new User(); // створюємо екземпляр класу User викликаючи конструктор та ініціалізуємо змінну user1
user1.firstName = 'Ivan'; // присвоєння значення властивості firstName на екземплярі user1
user1.lastName = 'Ivanov';

const user2: User = new User(); // створюємо екземпляр класу User викликаючи конструктор та ініціалізуємо змінну user2
user2.firstName = 'John'; // присвоєння значення властивості firstName на екземплярі user2
user2.lastName = 'Doe';

user1.print(); // виклик методу print на екземплярі user1
user2.print(); // виклик методу print на екземплярі user2
console.log(user1);

//
class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('shhhh');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDriving();
// car.honk();
