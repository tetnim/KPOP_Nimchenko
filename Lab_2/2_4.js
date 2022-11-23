"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UniversityLibrarian {
    constructor(name = "", email = "", department = "") {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
const favouriteLibrarian = new UniversityLibrarian();
favouriteLibrarian.name = "Poly";
favouriteLibrarian.assistCustomer("Taras");
