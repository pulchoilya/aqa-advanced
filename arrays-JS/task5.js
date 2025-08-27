/*
Завдання 5: Об'єднання масивів

Вам потрібно створити програму, яка об'єднає два масиви в один

Ось кроки, які вам потрібно виконати:

Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
Створіть новий масив, який містить всі елементи з обох вихідних масивів.
Виведіть отриманий об'єднаний масив на консоль.
 */

let firstArray = [1, 2, 3, 4, 5];
let secondArray = [5, 4, 3, 2, 1];
const concatenatedArray1 = firstArray.concat(secondArray);
console.log('[' + concatenatedArray1.join(', ') + ']');

//spread
const firstPart = ['I', 'love', 'working', 'in', 'IT'];
const secondPart = ['because', 'it', 'helps', 'me', 'learn', 'new', 'skills'];
const sentenceArray = [...firstPart, ...secondPart];
const sentenceWithoutCommas = '[ ' + sentenceArray.join(' ') + ' ]';
console.log(sentenceWithoutCommas);