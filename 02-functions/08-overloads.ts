function showMessage(message: string): void; // перше перевантаження функції, яка приймає один параметр типу string
function showMessage(message: number, arg: number): void; // друге перевантаження функції, яка приймає один параметр типу number
function showMessage(message: any): void {
  // безпосередньо реалізація функції, не є перевантаженням
  switch (typeof message) {
    case "number":
      console.log("Hello world");
      break;

    case "string":
      console.log(message);
      break;
  }
}

showMessage(1, 4);
showMessage("test");
showMessage(4, 4);
// showMessage(true); // compile error
