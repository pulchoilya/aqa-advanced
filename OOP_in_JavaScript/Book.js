/*
Завдання 1

Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів)
книг та повертати найдавнішу книгу за роком видання.
Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
 */

import { Book as BaseBook } from './Book.js';
import { EBook } from './EBook.js';

export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    printInfo() {
        console.log(`"${this._name}" by ${this._author}, published in ${this._year}`);
    }

    static findOldest(books) {
        return books.slice().sort((a, b) => a.year - b.year)[0];
    }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book3 = new Book("Harry Potter and the Philosopher’s Stone", "J.K. Rowling", 1997);


const ebook1 = new EBook("1984", "George Orwell", 1949, "PDF");
const ebook2 = new EBook("Brave New World", "Aldous Huxley", 1932, "ePub");

//  make one array from all books
const allBooks = [book1, book2, book3, ebook1, ebook2];

// Find the oldest book
const oldest = BaseBook.findOldest(allBooks);

// the oldest book
console.log("The oldest book:");
oldest.printInfo();

console.log("\n");

const book4 = new Book("1984", "George Orwell", 1949);
const ebook4 = EBook.fromBook(book4, "PDF");

console.log("The created EBook from the Book instance:");
ebook4.printInfo();