/*
Завдання 2

Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

 */

let myTodo;
let myUser;
let firstFinished;

export async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();

}

export async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return await response.json();
}

export async function fetchAll() {
    try {
        [myTodo, myUser] = await Promise.all([getTodo(), getUser()]);
        console.log("\nTodo:", myTodo);
        console.log("User:", myUser);
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function fetchFirst() {
    try {
        firstFinished = await Promise.race([getTodo(), getUser()]);
        console.log("\nFirst completed promise:", firstFinished);
    } catch (error) {
        console.error("Error:", error);
    }
}


fetchAll();
fetchFirst();
