var Position;
(function (Position) {
    Position["Junior"] = "junior";
    Position["Middle"] = "middle";
    Position["Senior"] = "senior";
})(Position || (Position = {}));
class Developer {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.salary = this.countSalary();
    }
    countSalary() {
        switch (this.position) {
            case Position.Junior:
                return 700;
            case Position.Middle:
                return 2000;
            case Position.Senior:
                return 5000;
            default:
                throw new Error('Недоступна позиція');
        }
    }
    setPosition(position) {
        // тут може бути додаткова перевірка, перш ніж оновити позицію девелопера
        this.position = position;
        this.salary = this.countSalary();
    }
    print() {
        console.log(`employee - ${this.name}, \nposition - ${this.position}, \nsalary - ${this.salary}`);
    }
}
const dev = new Developer('Ivan', Position.Junior);
dev.name = 'John';
// dev.salary = 100000000000; // Property 'salary' is private and only accessible within class 'Developer'.
// dev.position = Position.Senior; // Property 'position' is private and only accessible within class 'Developer'.
dev.print();
dev.setPosition(Position.Middle);
dev.print();
//# sourceMappingURL=04-public-private.js.map