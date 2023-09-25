// Найпоширеніший приклад використання статичних полів це клас Math
// Щоб скористатись методами класу Math нам не потрібен екземпляр
console.log(Math.PI);
console.log(Math.random());
// так працювати не буде:
// const math = new Math();
// math.random();
// Патерн singleton (одинак)
class Database {
    // Приватний конструктор, щоб заборонити створення екземплярів класу
    constructor() {
        console.log('Викликаємо конструктор');
    }
    // Статичний метод, існує лише у класа та відсутній у екземпляра
    static getInstance() {
        return Database.instance;
    }
    // методи для роботи з базою данних
    getData() {
        console.log('Received data from Database');
    }
    setData() {
        console.log('Data saved to Database');
    }
}
Database.instance = new Database(); // статичне приватне поле
// const database: Database = new Database(); // Constructor of class 'Database' is private and only accessible within the class declaration.
// Database.getData() //Property 'getData' does not exist on type 'typeof Database'.
// Database.setData() //Property 'setData' does not exist on type 'typeof Database'.
const db = Database.getInstance();
db.getData();
db.setData();
const db2 = Database.getInstance();
console.log('db === db2', db === db2); // якщо екземпляр класу один то маємо отримати true
//# sourceMappingURL=08-static.js.map