/*
Завдання 2

В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
Copy code
<https://jsonplaceholder.typicode.com/todos/1>
1. Функція повинна повертати як результат Promise що повертає об’єкт todo
2. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
Copy code
<https://jsonplaceholder.typicode.com/users/1>
1. Функція повинна повертати як результат Promise що повертає об’єкт user
2. Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
Присвойте значення отримані від цих виразів до змінних
 */

function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json());
}

getTodo()
    .then(todo => {
        console.log("Todo object:", todo);
        console.log("\n");
    })
    .catch(error => {
        console.error("Got an error:", error);
    });


function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json());
}

getUser()
    .then(user => {
        console.log("User:", user);
        console.log("\n");
    })
    .catch(error => {
        console.error("Error:", error);
    });

let myTodo;
let myUser;
let firstFinished;

Promise.all([getTodo(), getUser()])
    .then(([todo, user]) => {
        myTodo = todo;
        myUser = user;
        console.log("myTodo:", myTodo);
        console.log("\n")
        console.log("myUser:", myUser);
        console.log("\n");
    })
    .catch(error => {
        console.error("Error:", error);
    });

Promise.race([getTodo(), getUser()])
    .then(result => {
        firstFinished = result;
        console.log("First completed promise::", result);
        console.log("\n");
    })
    .catch(error => {
        console.error("Error:", error);
    });

