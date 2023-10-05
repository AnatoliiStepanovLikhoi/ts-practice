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

var2();

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

var3();

///Fetch todos

const URL1: string = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(URL1).then((res) => {
  console.log(res.data);
});
