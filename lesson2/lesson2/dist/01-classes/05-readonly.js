// за допомогою ключового слова readonly можна створити поля лише для читання
// Таке поле може бути ініціалізоване в момент його створення або у конструкторі
class Dog {
    constructor(name) {
        this.numberOfLegs = 4;
        this.name = name;
    }
}
const dog = new Dog('Sharik');
console.log(dog.name);
console.log(dog.numberOfLegs);
// dog.numberOfLegs = 5; // Cannot assign to 'numberOfLegs' because it is a read-only property.
// dog.name = "";
//# sourceMappingURL=05-readonly.js.map