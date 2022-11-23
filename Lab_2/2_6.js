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
ReferenceItem.department = "Kyiv";
class Encyclopedia extends ReferenceItem {
    constructor(edition) {
        super("Square", 1002);
        this.edition = edition;
    }
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year} year)`);
    }
}
const refBook = new Encyclopedia(2020);
refBook.printItem();
