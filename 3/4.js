"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    if (a === b) {
        return 0;
    } else {
        return Math.max(a, b) - Math.min(a, b);
    }
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Деление на ноль!");
        return NaN;
    }
    return a / b;
}

const number1 = parseFloat(prompt("Введите первое число:"));
const number2 = parseFloat(prompt("Введите второе число:"));

const operation = prompt("Выберите операцию:\n1. Сложение\n2. Вычитание\n3. Умножение\n4. Деление");

let result;

switch (operation) {
    case "1":
        result = sum(number1, number2);
        break;
    case "2":
        result = subtract(number1, number2);
        break;
    case "3":
        result = multiply(number1, number2);
        break;
    case "4":
        result = divide(number1, number2);
        break;
    default:
        console.log("Неверный выбор операции.");
}

if (result !== undefined) {
    console.log(`Результат операции: ${result}`);
}

