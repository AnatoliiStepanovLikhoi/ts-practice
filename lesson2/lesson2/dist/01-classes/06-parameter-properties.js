// Якщо для визначення параметрів у конструкторі вказати їм модифікатори доступу
// Ці параметри автоматично стануть полями класу з відповідним рівнем доступу
// та значеннями, які будуть встановлені при виклику конструктора.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name + ' ' + this.age);
    }
}
const person = new Person('Jhon', 25);
person.print();
person.name = 'Ivan'; // поле public
// person.age = 111; // поле private
//# sourceMappingURL=06-parameter-properties.js.map