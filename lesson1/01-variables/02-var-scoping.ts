import axios from 'axios';

// Змінні, створені з використанням ключового слова var,
// знаходяться у глобальній області видимості або
// локальної області видимості, яка представлена ​​функцією.
// При цьому змінна доступна до її фактичного визначення
// і після будь-якого блоку {}

function var1() {
  console.log(i); // undefined
  console.log(test); // undefined

  for (var i = 0; i < 10; i++) {
    var test = i;
  }

  console.log(i); // 10
  console.log(test); // 9
}

// var1();

// Повторне визначення змінної не призводить до помилки.
function var2() {
  var a = 10;
  var a = 20;
  console.log(a); // 20
}

// var2();

// такий цикл виведе на екран 5, 5, 5, 5, 5
// замість очікуваних 0, 1, 2, 3, 4
// Щоразу,коли викликалася функція setTimeout їй
// передавалося посилання на одну й ту саму змінну з
// області видимості функції f3, тому всі виклики
// setTimeout у результаті використовували одне значення
function var3() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
}

// var3();

///Fetch todos

const URL1: string = 'https://jsonplaceholder.typicode.com/todos/3';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL1).then((res) => {
  const todo: Todo = res.data;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(ID, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
  The Todo with ID: ${id},
  Has title of: ${title},
  Is it finished? ${completed},
  `);
};
