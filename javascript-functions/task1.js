/*
Завдання 1

Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)
*/

// function declaration
function areaRectangle(width, height) {
    return width * height;
};

console.log(areaRectangle(5, 10)); 

// function expression
const area = function(width, height) {
    return width * height;
};

console.log(area(5, 10)); 

// arrow function
const square = (width, height) => width * height;

console.log(square(5, 10)); 