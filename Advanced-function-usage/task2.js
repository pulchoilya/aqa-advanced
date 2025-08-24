/*
Завдання 2

Створіть функцію яка приймає один параметр: num.
Усередині функції виведіть значення num в консоль.
Після цього, рекурсивно викличте функцію зі зменшеним значенням num (наприклад, num - 1).
Фунція повинна викликатися, доки num не стане менше або рівне 0.
Викличте вашу функцію з аргументом, наприклад, 5, щоб почати рекурсивний лічильник.
*/

function recursive(number) {
  if (number <= 0) {
    return; 
  }
  console.log(number);
  recursive(number - 1);
}

recursive(5);

// --- arrow function  --- 
console.log('arrow function')
const countdown = (num) => {
  if (num <= 0) return;     
  console.log(num);
  countdown(num - 1);         
};

countdown(5);