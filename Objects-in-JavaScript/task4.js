/*
Завдання 4
Створіть об'єкт person з такими властивостями:
firstName: рядок, представляє ім'я особи.
lastName: рядок, представляє прізвище особи.
age: число, представляє вік особи.
Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
Видаліть властивість age з об'єкта person.
Виведіть оновлений об'єкт person в консоль.
 */
const person = {
    firstName: "Ilya",
    lastName: "Pulcho",
    age: 25,
}
person.email = "Ilya@mail.ua";
console.log(person);
delete person.age;
console.log(person);

console.log('\n');
console.log('spread operator, create new object');

const person2 = {
    firstName: "Ilya",
    lastName: "Pulcho",
    age: 25,
};

const updatedPerson = { ...person2, email: "Ilya@mail.ua" };
delete updatedPerson.age;

console.log(updatedPerson);