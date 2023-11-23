class Book {
    constructor(bookName, author, publish, price) {
        this.bookName = bookName;
        this.author = author;
        this.publish = publish;
        this.price = price;
    }
    display() {
        console.log("Book Name: " + this.bookName);
        console.log("Author: " + this.author);
        console.log("Publish Date: " + this.publish);
        console.log("Price: " + this.price);
    }
    getVatPrice() {
        return this.price * Book.vat;
    }
}
Book.vat = 1.17;
export default Book;
