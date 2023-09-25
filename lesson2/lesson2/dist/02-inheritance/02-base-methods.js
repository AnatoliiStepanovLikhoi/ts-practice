// базовий тип даних
class Shape {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        return `This is ${this.name}.`;
    }
}
// похідний тип даних
class Rect extends Shape {
    constructor(width, height) {
        super('Rectangle'); // запуск конструктора батьківського класу
        this.width = width;
        this.height = height;
    }
    getInfo() {
        const baseInfo = super.getInfo();
        return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
    }
}
const newRect = new Rect(100, 200);
console.log(newRect.getInfo());
// похідний тип даних
class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }
    getInfo() {
        const baseInfo = super.getInfo(); // виклик методу батьківського класу
        return `${baseInfo} Radius = ${this.radius}`;
    }
}
const shapes = []; // створення масиву базового типу
shapes.push(new Rect(100, 200)); // заповнення масиву екземплярами похідного класу
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));
// до масиву shapes можна додавати тільки об'єкти, які мають ідентичну з класом Shape структуру
shapes.push({
    name: 'foo',
    getInfo: () => {
        return 'bar';
    },
});
for (let i = 0; i < shapes.length; ++i) {
    const info = shapes[i].getInfo();
    console.log(info);
}
//# sourceMappingURL=02-base-methods.js.map