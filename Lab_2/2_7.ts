abstract class ReferenceItem {
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

  public abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
  constructor(public edition: number) {
    super("Square", 1002);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year} year)`);
  }

  public printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}

const refBook: Encyclopedia = new Encyclopedia(2020);
refBook.printItem();
refBook.printCitation();
