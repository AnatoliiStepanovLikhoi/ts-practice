// implements - ключове слово для реалізації інтерфейсу у класі
// якщо члени інтерфейсу не будуть визначені в класі, компілятор видасть помилку
class DailyReport {
    constructor() {
        this.name = 'Daily Report';
    }
    build() {
        return 'some daili report data';
    }
}
class WeaklyReport {
    constructor() {
        this.name = 'Weakly Report';
    }
    build() {
        return 'some weakly report data';
    }
}
const r1 = new DailyReport();
const r2 = new WeaklyReport();
console.log(r1.build());
console.log(r2.build());
//# sourceMappingURL=05-implementing.js.map