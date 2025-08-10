/*Завдання 2: Конкатенація радків та шаблонний рядок

Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.*/

// Concatenation
const firstPersonName = 'Denis';
const secondPersonName = 'Jessica';
let welcome = "Hello " + firstPersonName + " and " + secondPersonName + " glad to see you!";
console.log(welcome);

// Template strings
welcome = `Hello ${firstPersonName } and ${secondPersonName} glad to see you!`;
console.log(welcome);