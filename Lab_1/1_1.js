"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllworkers = function () {
    let workers = [
        { name: "Ivan", surname: "Ivanov", available: true, salary: 1000 },
        { name: "Petro", surname: "Petrov", available: true, salary: 1500 },
        { name: "Vasyl", surname: "Vasyliev", available: false, salary: 1600 },
        { name: "Evgen", surname: "Zhukov", available: true, salary: 1300 },
    ];
    return workers;
};
const logFirstAvailable = function (workers) {
    console.log(`Count of workers: ${workers.length}`);
    console.log();
    for (let worker of workers) {
        if (worker.available) {
            console.log(`Name and surname of the first avaliable worker is ${worker.name} ${worker.surname}`);
            console.log(`Is worker available: ${worker.available}`);
            console.log(`Worker salary: ${worker.salary}`);
            console.log();
            break;
        }
    }
};
const workers = getAllworkers();
console.table(workers);
console.log();
logFirstAvailable(workers);
