class Rectangle {
    // метод для отримання значення закритої властивості
    getWidth() {
        return this._width;
    }
    // метод для встановлення значення закритій властивості
    setWidth(value) {
        if (value <= 0) {
            this._width = 1;
        }
        else {
            this._width = value;
        }
    }
    // accessors - механізм, який дозволяє перехопити звернення до члена об'єкта на запис чи читання.
    // getter
    get height() {
        return this._height;
    }
    // setter
    set height(value) {
        if (value <= 0) {
            this._height = 1;
        }
        else {
            this._height = value;
        }
    }
    calculateArea() {
        return this._width * this._height;
    }
}
const rect = new Rectangle();
rect.setWidth(100); // встановлення ширини за допомогою методу
console.log(rect.getWidth()); // читання значення закритої властивості за допомогою методу
rect.height = -20; // встановлення висоти за допомогою setter. Запускається метод set на рядку 28, значення 20 передається як параметр
console.log(rect.height); // Читання значення закритої властивості за допомогою аксесору. Тут викликається метод get з рядка 23
const rectArea = rect.calculateArea();
console.log(rectArea);
//# sourceMappingURL=07-accessors.js.map