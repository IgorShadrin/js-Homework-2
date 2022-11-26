// Напишите программу которая проверит длину каждого имя в массиве
// Если длина меньше или равна 5 символам - добавить в массив shortNames
// *** Сложное *** удалить это же имя из массива users
// Решение задачи с удалением из массива

const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];

const result = users.filter((user) => {
  if (user.length <= 5) {
     shortNames.push(user);
  }
      else {
        return users;
      }
    });

console.log(users);
console.log(shortNames);





// Напишите функцию, которая для каждого имени в массиве
// выведет в консоль строку
// Hello ИМЯ. Your name is ДЛИНА characters long!

const names = [
  "Jack",
  "Mariah",
  "Sarah",
  "Jonathan",
  "Piere",
  "Bob",
  "Samantha",
  "Mary",
];

const naming = (array) => {
  array.forEach(element => {
      console.log('Hello ' + element + '. Your name is ' + element.length + ' characters long!') 
  });
};

naming(names);




// напишите функцию которая примет объект в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если False то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии

const myCar = {
  make: "Honda",
  model: "Civic",
  popular: false,
  mileage: 100000,
};

const warrantyCheck = (object) => { 
  console.log(
    'Your ' + object.make + ' ' + object.model + ' (is ' + (object.popular ? 'popular' : 'not popular') + ').'
  );
  console.log(
    'Your car is ' + (object.mileage >= 100000 ? 'not covered' : 'covered') + ' warranty.'
  );
};

warrantyCheck(myCar);




// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их

const calc  = function (a, b) {
  if (a < 0) {
    a *= -1;
  }
  if (b < 0) {
    b *= -1;
  }
  return console.log(a + b);
};

calc(2, -5);




// Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)

const numbers = function (a, b) {
  if (a > 0 && b > 0) {
    console.log(a + b);  
  } else if (a < 0 || b < 0) {
    console.log('одно из чисел негативное');
  }  
};

numbers(5 , 5);




