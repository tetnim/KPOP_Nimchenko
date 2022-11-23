class ReferenceItem {
  //   title: string;
  //   year: number;

  //   constructor(newTitle: string, newYear: number) {
  //     this.title = newTitle;
  //     this.year = newYear;

  //     console.log("Creating a new ReferenceItem ...");
  //     }

  private static department: string = "Kyiv";

  private _publisher: string = "";

  constructor(public title: string, protected year: number) {
    console.log("Creating a new ReferenceItem ...");
  }

  get publisher(): string {
    console.log("Getting publisher ...");
    return this._publisher.toUpperCase();
  }

  set publisher(publisher: string) {
    // console.log("Setting publisher ...");
    this._publisher = publisher;
  }

  printItem(): void {
    console.log(`Title: "${this.title}" was published in ${this.year} year`);
    console.log("Logging static field department: " + ReferenceItem.department);
  }
}

const ref = new ReferenceItem("Square", 1002);
ref.printItem();

ref.publisher = "Shevchenko";
console.log(ref.publisher);

export {};
