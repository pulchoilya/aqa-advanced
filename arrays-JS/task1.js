/*
Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел

Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел.

Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для відстеження кількості позитивних,
негативних та нульових чисел в масиві.
Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
 */
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}
console.log("Положительные числа:", positiveCount);
console.log("Отрицательные числа:", negativeCount);
console.log("Кількість нульових чисел:", zeroCount);

const numbers1 = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount2 = 0;
let negativeCount2 = 0;
let zeroCount2 = 0;

for (const num of numbers1) {
    if (num > 0) {
        positiveCount2++;
    } else if (num < 0) {
        negativeCount2++;
    } else {
        zeroCount2++;
    }
}

console.log("Положительные числа:",positiveCount2, "Отрицательные числа:",negativeCount2,"Кількість нульових чисел:", zeroCount2);

const numbers3 = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount3 = 0;
let negativeCount3 = 0;
let zeroCount3 = 0;


numbers3.forEach(num =>{
    if (num > 0)  positiveCount3++;
    else if (num < 0)  negativeCount3++;
    else zeroCount3++
    });
console.log(positiveCount3, negativeCount3, zeroCount3);

