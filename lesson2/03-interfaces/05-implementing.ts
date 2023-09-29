interface Report1 {
  name: string;
  build: () => string;
}

// implements - ключове слово для реалізації інтерфейсу у класі
// якщо члени інтерфейсу не будуть визначені в класі, компілятор видасть помилку
class DailyReport implements Report1 {
  name: string = "Daily Report";

  build(): string {
    return "some daili report data";
  }
}

class WeaklyReport implements Report1 {
  name: string = "Weakly Report";

  build(): string {
    return "some weakly report data";
  }
}

const r1: Report1 = new DailyReport();
const r2: Report1 = new WeaklyReport();

console.log(r1.build());
// console.log(r2.build());
