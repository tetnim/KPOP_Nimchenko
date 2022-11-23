interface IPerson {
  name: string;
  email: string;
}

interface IAuthor extends IPerson {
  numBooksPublished: number;
}

interface ILibrarian extends IPerson {
  department: string;
  assistCustomer: (custName: string) => void;
}

const favoriteAuthor: IAuthor = {
  name: "Ivan Ivanov",
  email: "ivanivanov@gmail.com",
  numBooksPublished: 4,
};

const favouriteLibrarian: ILibrarian = {
  name: "Poly",
  email: "poly@gmail.com",
  department: "Kyiv",
  assistCustomer(custName: string) {
    console.log(`${this.name} is assisting ${custName}`);
  },
};

console.log("Favourite author: ");
console.table(favoriteAuthor);

console.log();

console.log("Favourite librarian: ");
console.table(favouriteLibrarian);

export { ILibrarian };
