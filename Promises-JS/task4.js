/*
Завдання 2
Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.
 */

import { getTodo, getUser } from './task3.js';

export class TodoService {
    async getTodoItem() {
        return await getTodo();
    }
}

export class UserService {
    async getUserInfo() {
        return await getUser();
    }
}
