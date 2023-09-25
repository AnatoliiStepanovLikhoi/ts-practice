// abstract - ключове слово, яке дозволяє створювати абстрактні методи та абстрактні класи.
// абстрактний клас - це клас, який може існувати лише в ролі базового класу. Створити екземпляр абстрактного класу не вдасться.
// абстрактний метод - це метод, який не має реалізації в поточному класі, але обов'язково повинен бути реалізований у похідному класі.
// абстрактні методи можуть створюватися лише в абстрактних класах.
// абстрактний клас
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(this.name + ' пересувається');
    }
}
class Cat extends Animal {
    constructor() {
        super('Кіт');
    }
    // обов'язкова реалізація абстрактного методу із базового класу. Спробуйте видалити цей метод із класу Cat
    makeSound() {
        console.log('Мяу-Мяу');
    }
}
class Cow extends Animal {
    constructor() {
        super('Корова');
    }
    makeSound() {
        console.log('My-y-y-y-y');
    }
}
const murzik = new Cat();
murzik.makeSound();
murzik.move();
const burenka = new Cow();
burenka.makeSound();
burenka.move();
// const animal: Animal = new Animal('animal');
//# sourceMappingURL=03-abstract.js.map