class Book{
    public bookName: string;
    public author: string;
    public publish: number;
    public price: number;
    public static readonly vat = 1.17;

    public constructor(bookName: string, author: string, publish: number, price: number){
        this.bookName = bookName;
        this.author = author;
        this.publish = publish;
        this.price = price;
    }

    public display(): void {
        console.log("Book Name: " + this.bookName);
        console.log("Author: " + this.author);
        console.log("Publish Date: " + this.publish);
        console.log("Price: " + this.price);
    }

    public getVatPrice(): number {
        return this.price * Book.vat;
    }
}

export default Book;