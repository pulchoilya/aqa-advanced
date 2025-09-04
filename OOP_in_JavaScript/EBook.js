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


const ebook1 = new  EBook("To Kill a Mockingbird", "Harper Lee", 1960, "electronic book");
const ebook2 = new EBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "PDF");
const ebook3 = new EBook("Harry Potter and the Philosopher’s Stone", "J.K. Rowling", 1997, "ePub");

ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();

console.log("\n");

const ebook4 = new EBook("1984", "George Orwell", 1949, "PDF");
ebook4.printInfo();
ebook4.format = "WORD";   // Format  is invalid
ebook4.name = "Brave New World";  // 3 words, no warning
ebook4.year = 1500;  // The book of 20th century
ebook4.author = "Jack";
ebook4.printInfo();