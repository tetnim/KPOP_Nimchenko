interface iPrizeLogger {
  (prize: string): void;
}

type workerCategory =
  | "Business analyst"
  | "Developer"
  | "Designer"
  | "QA"
  | "Scrum master";

interface IWorker {
  name: string;
  surname: string;
  available: boolean;
  salary: number;
  category: workerCategory;
  id: number;
  markPrize: iPrizeLogger;
}

let logPrize: iPrizeLogger;

function prizeLogger(prize: string): void {
  console.log("Your price is: " + prize);
}

logPrize = prizeLogger;
logPrize("PC");
