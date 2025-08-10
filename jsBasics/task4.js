// ---  Завдання 4: Обчислення площі та об'єму ---

/*Завдання 4.1

π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
1. Створіть змінну radius і присвойте їй числове значення радіуса кола.
2. Обчисліть площу кола за формулою π * radius^2 і виведіть результат.*/


let radius = 9;
let area = Math.PI * radius ** 2;
console.log(Math.floor(area));  // Added rounding to make the area look nicer


/*Завдання 4.2

1. Створіть змінну length і присвойте їй числове значення довжини прямокутника.
2. Створіть змінну width і присвойте їй числове значення ширини прямокутника.
3. Обчисліть площу прямокутника за формулою length * width і виведіть результат.
*/

const length = 10;
const width = 5;
let rectangleArea = length * width;
console.log(rectangleArea);

// // The second way is via Math.imul (multiplication of integers)
rectangleArea = Math.imul(length, width);
console.log(rectangleArea);



/*Завдання 4.3

1. Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
2. Cтворіть змінну height і присвойте їй числове значення висоти циліндра.
3. Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.

Округліть кожне отримане значення до 2 значень після крапки
*/

const radiusCylinder = 15;
const height = 10;
const volume = Math.PI * radiusCylinder ** 2 * height;
console.log(volume.toFixed(2)); 