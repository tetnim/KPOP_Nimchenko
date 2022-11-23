"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const favoriteAuthor = {
    name: "Ivan Ivanov",
    email: "ivanivanov@gmail.com",
    numBooksPublished: 4,
};
const favouriteLibrarian = {
    name: "Poly",
    email: "poly@gmail.com",
    department: "Kyiv",
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    },
};
console.log("Favourite author: ");
console.table(favoriteAuthor);
console.log();
console.log("Favourite librarian: ");
console.table(favouriteLibrarian);
