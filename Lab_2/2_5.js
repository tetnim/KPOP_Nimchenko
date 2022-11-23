"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._publisher = "";
        console.log("Creating a new ReferenceItem ...");
    }
    get publisher() {
        console.log("Getting publisher ...");
        return this._publisher.toUpperCase();
    }
    set publisher(publisher) {
        // console.log("Setting publisher ...");
        this._publisher = publisher;
    }
    printItem() {
        console.log(`Title: "${this.title}" was published in ${this.year} year`);
        console.log("Logging static field department: " + ReferenceItem.department);
    }
}
//   title: string;
//   year: number;
//   constructor(newTitle: string, newYear: number) {
//     this.title = newTitle;
//     this.year = newYear;
//     console.log("Creating a new ReferenceItem ...");
//     }
ReferenceItem.department = "Kyiv";
const ref = new ReferenceItem("Square", 1002);
ref.printItem();
ref.publisher = "Shevchenko";
console.log(ref.publisher);
