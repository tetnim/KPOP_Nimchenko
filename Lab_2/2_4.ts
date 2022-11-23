import { ILibrarian } from "./2_3";

class UniversityLibrarian implements ILibrarian {
  public name: string;
  public email: string;
  public department: string;

  constructor(name: string = "", email: string = "", department: string = "") {
    this.name = name;
    this.email = email;
    this.department = department;
  }

  public assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

const favouriteLibrarian: ILibrarian = new UniversityLibrarian();
favouriteLibrarian.name = "Poly";
favouriteLibrarian.assistCustomer("Taras");
