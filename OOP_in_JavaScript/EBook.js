/*
Завдання 1

В окремому файлі створіть клас "Електронна книга" (EBook),
який буде успадковувати властивості та методи класу Book.
Додайте до класу EBook нову властивість, наприклад, "формат файлу".
Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр
EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр)
класу EBook та викличте метод printInfo
 */

import { Book } from './task1.js';

export class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this._allowedFormats = ["PDF", "ePub", "MOBI", "electronic book"];
        this._format = format;
    }

    get format() {
        return this._format;
    }

    set format(newFormat) {
        if (this._allowedFormats.includes(newFormat)) {
            console.log(`Format "${newFormat}" is allowed.`);
            this._format = newFormat;
        } else {
            console.log(`Format "${newFormat}" is invalid! Allowed formats: ${this._allowedFormats.join(", ")}`);
        }
    }

    printInfo() {
        console.log(`"${this.name}" by ${this.author}, published in ${this.year}, format: ${this.format}`);
    }

static fromBook(bookMethod, format) {
    return new EBook(bookMethod.name, bookMethod.author, bookMethod.year, format);
    }
}


// create books
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book3 = new Book("Harry Potter and the Philosopher’s Stone", "J.K. Rowling", 1997);
const book4 = new Book("1984", "George Orwell", 1949);

console.log("\n");

// EBook from fromBook
const ebook1 = EBook.fromBook(book1, "electronic book");
const ebook2 = EBook.fromBook(book2, "PDF");
const ebook3 = EBook.fromBook(book3, "ePub");
const ebook4 = EBook.fromBook(book4, "MOBI");

console.log("\n");

ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();

console.log("\n");

// ebook4
ebook4.printInfo();
ebook4.format = "WORD";
ebook4.name = "Brave New World";
ebook4.year = 1500;
ebook4.author = "Jack";
ebook4.printInfo();

