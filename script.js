// // Задание 1
// // Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function numberExponentiation(arg1) {
//     return Math.pow(arg1, 3);
// }

// let number1 = 2;
// let number2 = 3;

// let result = numberExponentiation(number1) + numberExponentiation(number2);

// console.log(`Результат сложения, возведенных в третью степень чисел, равен ${result}`);


// // Задание 2
// // Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// // Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// let number1 = Number(prompt('Введите число'));

// if (isNaN(number1)) {
//     alert('Введите число');
// }

// function userSalary(arg1) {
//     return arg1 * 0.87;
// }

// let salaryResult = userSalary(number1);

// console.log(`Размер заработной платы за вычетом налогов равен ${salaryResult}`);


// // Задание 3
// // Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// let number1 = Number(prompt("Введите первое число"));
// let number2 = Number(prompt("Введите второе число"));
// let number3 = Number(prompt("Введите третье число"));

// function compareNumbers(arg1, arg2, arg3) {
//   if (arg1 >= arg2 && arg1 >= arg3) {
//     console.log(`Число ${arg1} имеет максимальное значение`);
//   } else if (arg2 >= arg1 && arg2 >= arg3) {
//     console.log(`Число ${arg2} имеет максимальное значение`);
//   } else {
//     console.log(`Число ${arg3} имеет максимальное значение`);
//   }
// }

// compareNumbers (number1, number2, number3);


// // Задание 4
// // Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// // 1. Сложение
// // 2. Разность
// // 3. Умножение
// // 4. Деление
// // Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль 
// // (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
// // Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
// // Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// let number1 = Number(prompt("Введите первое число"));
// let number2 = Number(prompt("Введите второе число"));

// function sumNumbers(arg1, arg2) {
//     return arg1 + arg2;
// }

// let sumResult = sumNumbers(number1, number2);

// function subtractionNumbers(arg1, arg2) {
//     if (arg1 >= arg2) {
//         return arg1 - arg2
//     } else {
//         return arg2 - arg1;
//     }
// }

// let subtractionResult = subtractionNumbers(number1, number2);

// function productNumbers(arg1, arg2) {
//     return arg1 * arg2;
// }
// let productResult = productNumbers(number1, number2);

// function divideNumbers(arg1, arg2) {
//     return arg1 / arg2;
// }

// let divideResult = divideNumbers(number1, number2);

// console.log(`Сумма чисел ${number1} и ${number2} равна ${sumResult}`);
// console.log(`Разность чисел ${number1} и ${number2} равна ${subtractionResult}`);
// console.log(`Произведение чисел ${number1} и ${number2} равно ${productResult}`);
// console.log(`Деление чисел ${number1} и ${number2} равно ${divideResult}`);

