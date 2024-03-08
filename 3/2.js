"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/


function calculateSalaryWithTax(number) {
    const taxRate = 0.13;
    const salaryAfterTax = number * (1 - taxRate);
    console.log(`Размер заработной платы за вычетом налогов равен ${salaryAfterTax}.`);
}

const userInput = prompt("Пожалуйста, введите число:");

if (!isNaN(userInput)) {
    const number = parseFloat(userInput);
    calculateSalaryWithTax(number);
} else {
    console.log("Значение задано неверно.");
}

