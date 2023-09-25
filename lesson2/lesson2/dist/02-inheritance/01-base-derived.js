class Base {
    constructor() {
        this.value1 = 'private value 1';
        this.value2 = 'public value 2';
        this.value3 = 'protected value 3';
    }
    method1() {
        console.log('private method 1 call.');
    }
    method2() {
        console.log('public method 2 call.');
    }
    method3() {
        console.log('protected method 3 call.');
    }
}
// клас Derived успадковує клас Base, клас Derived розширює клас Base
class Derived extends Base {
    constructor() {
        super(); // Виклик конструктора базового класу. Обов'язкова операція при наслідуванні.
        // console.log('private property = ' + this.value1);
        console.log('public property = ' + this.value2);
        console.log('protected property = ' + this.value3);
        // this.method1(); // метод private, прихований
        this.method2(); // public - відкритий для всіх
        this.method3(); // protected - доступний, оскільки цей клас є спадкоємцем
    }
}
const derived = new Derived();
// доступний лише метод method2 та value2, оскільки вони public. Інші елементи не доступні, оскільки цей код знаходиться за межами класу.
// console.log(derived.value1);
// console.log(derived.value3);
console.log(derived.value2);
// derived.method1();
// derived.method3();
derived.method2();
//# sourceMappingURL=01-base-derived.js.map