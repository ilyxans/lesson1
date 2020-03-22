'use strict';


// var number = 5;
// var string = "Hello!";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log('string');

// let somthing;
// console.log(somthing);

// let persone = {
//     name: "John",
//     age: 25,
//     isMarried: false

// };

// console.log(persone.name);

// let arr = ['plum.png','orange.jpg','apple.bmp'];

// console.log(arr[1]);  

// alert("Hello World");

// confirm("Are you 18 years old?");

// let answer = prompt("are you 18?", "yes");
// console.log(typeof(arr));


// let money = prompt("Your mounthly budget?", "Enter value");
// let time = prompt("Enter date", "YYYY-MM_DD");

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {
//         money : time
//     },
//     optionalExpenses: {

//     },
//     income: [],
//     savings: false
// };

// alert(appData);

// 7 типов данных;
// console.log():
// && - И, || - или;

let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

// Важно! В последних версиях браузеров поведение работы со свойствами объектов поменялось. 
// Теперь синтаксис через точку может не работать. Поэтому выше я использовал квадратные скобки. 
// Если вы это читаете - то в скором времени обновится и видео в самом курсе. Спасибо за внимание!

alert(appData.budget / 30);