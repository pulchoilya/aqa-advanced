/*
Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі
 */

const users = [
    {
        name: "Ilya",
        email: "ilya@mail.ua",
        age: 25,
        city: "Kyiv",
        hobbies: "football",
    },
    {
        name: "Anna",
        email: "anna@mail.ua",
        age: 30,
        city: "Lviv",
        hobbies: "traveling",
    },
    {
        name: "Oleg",
        email: "oleg@mail.ua",
        age: 28,
        city: "Odessa",
        hobbies: "sport",
    },
    {
        name: "Maria",
        email: "maria@mail.ua",
        age: 22,
        city: "Dnipro",
        hobbies: "reading",
    }
];

for (const user of users) {
    console.log(user.name, user.email, user.age, user.city, user.hobbies);
}

console.log('\n');

for (const { name, email,age, city, hobbies} of users) {
    console.log(name, email, age, city, hobbies);
}