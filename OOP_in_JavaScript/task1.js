/*
Завдання 1

Створіть клас "Книга" (Book) з властивостями, такими як "назва",
"автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo.
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
 */


export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }


    get name() {
        return this._name;
    }

    set name(newName) {
        const wordsCount = newName.split(' ').length;
        if (wordsCount > 3) {
            console.log(`The name "${newName}" contains more than 3 words`);
        } else {
            console.log(`The name "${newName}" contains 3 or less words`);
        }
        this._name = newName;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (newAuthor[0] === 'H' || newAuthor[0] === 'J') {
            console.log(`Author starts with H or J: ${newAuthor}`);
        }
        this._author = newAuthor;
    }


    get year() {
        return this._year;
    }


    set year(century) {
        if (century < 2000) {
            console.log("The book of 20th century");
        } else {
            console.log("The book of 21st century");
        }
        this._year = century;
    }

    printInfo() {
        console.log(`"${this.name}" by ${this.author}, published in ${this.year}`);
    }
}


const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book3 = new Book("Harry Potter and the Philosopher’s Stone", "J.K. Rowling", 1997);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log("\n");

const book4 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
book4.printInfo();
book4.name = "Harry Potter and the Philosopher’s Stone";  // Warning, >3 words
book4.author = "H. G. Wells";    // Note, starts with H
book4.year = 1999;  // 20th century
console.log(book4.name, book4.author, book4.year);
