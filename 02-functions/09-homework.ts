// Використовуючи TS, створіть наступну функцію, яка розраховує вартість
// морозива: Магазин пропонує 2 розміри морозива:
// • Маленький стаканчик (10грн)
// • Великий стаканчик (25грн)
// • Морозиво доповнюється однією або декількома начинками (мінімум – однією):
// -шоколад (+5грн)
// -карамель (+6грн)
// -ягоди (+10грн)
//  Додатково морозиво (не обов'язково) можна посипати маршмелоу (+5грн).
// Вхідні параметри користувач вводить через prompt

function calculateIceCreamCost() {
  const iceCreamSize = prompt(
    "Оберіть розмір морозива: Маленький (S) або Великий (L)"
  ).toLowerCase();

  const toppingsInput = prompt(
    "Введіть список начинок (розділіть їх комами): шоколад, карамель, ягоди"
  );
  const toppings = toppingsInput
    ? toppingsInput.split(",").map((item) => item.trim().toLowerCase())
    : [];

  let iceCreamCost: number =
    calculateSizeCost(iceCreamSize) + calculateToppingsCost(toppings);

  const addMarshmallow = confirm("Бажаєте посипати маршмелоу (+5грн)?");
  if (addMarshmallow) {
    iceCreamCost += 5;
  }

  alert(`Загальна вартість морозива: ${iceCreamCost}грн`);
}

function calculateSizeCost(size: string): number {
  switch (size) {
    case "s":
      return 10;
    case "l":
      return 25;
    default:
      alert("Введено невірний розмір морозива. Спробуйте ще раз.");
      return 0;
  }
}

function calculateToppingsCost(selectedToppings: string[]): number {
  let totalCost = 0;
  for (const topping of selectedToppings) {
    switch (topping) {
      case "шоколад":
        totalCost += 5;
        break;
      case "карамель":
        totalCost += 6;
        break;
      case "ягоди":
        totalCost += 10;
        break;
      default:
        alert(`Невідома начинка: ${topping}`);
    }
  }
  return totalCost;
}

calculateIceCreamCost();
