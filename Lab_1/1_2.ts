enum Category {
  BA = "Business analyst",
  DEVELOPER = "Developer",
  DESIGNER = "Designer",
  QA = "QA",
  SCRUM = "Scrum master",
}

type workerCategory =
  | "Business analyst"
  | "Developer"
  | "Designer"
  | "QA"
  | "Scrum master";

interface IWorkers {
  name: string;
  surname: string;
  available: boolean;
  salary: number;
  category: workerCategory;
}

const getAllworkers = function (): IWorkers[] {
  let workers: IWorkers[] = [
    {
      name: "Ivan",
      surname: "Ivanov",
      available: true,
      salary: 1000,
      category: "Business analyst",
    },
    {
      name: "Petro",
      surname: "Petrov",
      available: true,
      salary: 1500,
      category: "Developer",
    },
    {
      name: "Vasyl",
      surname: "Vasyliev",
      available: false,
      salary: 1600,
      category: "QA",
    },
    {
      name: "Evgen",
      surname: "Zhukov",
      available: true,
      salary: 1300,
      category: "Designer",
    },
  ];

  return workers;
};

const getWorkersNamesByCategory = function (
  category: workerCategory
): Array<string> | string {
  const workers: IWorkers[] = getAllworkers();
  const workersByCategory: Array<string> = [];

  workers.filter((worker) => {
    if (worker.category === category) {
      workersByCategory.push(worker.surname);
    }
  });

  if (workersByCategory.length) return workersByCategory;
  else return "Currently there is no employee with this category";
};

const logWorkersNames = function (arrayOfStr: string[]): void {
  arrayOfStr.forEach((el) => console.log("Worker name is " + el));
};
const workerNames = ["Danyil", "Ivan", "Ben", "Denis", "Gabby"];

console.table(getAllworkers());
console.log();

const BA = getWorkersNamesByCategory(Category.BA);
console.log("Business analyst: " + BA);
console.log();

const DEVELOPER = getWorkersNamesByCategory(Category.DEVELOPER);
console.log("Developer: " + DEVELOPER);
console.log();

const DESIGNER = getWorkersNamesByCategory(Category.DESIGNER);
console.log("Designer: " + DESIGNER);
console.log();

const QA = getWorkersNamesByCategory(Category.QA);
console.log("QA: " + QA);
console.log();

const SCRUM = getWorkersNamesByCategory(Category.SCRUM);
console.log("Scrum master: " + SCRUM);
console.log();

console.log("logWorkersNames function result");
console.log();
logWorkersNames(workerNames);

export {};
