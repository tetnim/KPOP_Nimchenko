"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllworkers = function () {
    let workers = [
        {
            name: "Ivan",
            surname: "Ivanov",
            available: true,
            salary: 1000,
            category: "Business analyst",
            id: 0,
        },
        {
            name: "Petro",
            surname: "Petrov",
            available: true,
            salary: 1500,
            category: "Developer",
            id: 1,
        },
        {
            name: "Vasyl",
            surname: "Vasyliev",
            available: false,
            salary: 1600,
            category: "QA",
            id: 2,
        },
        {
            name: "Evgen",
            surname: "Zhukov",
            available: true,
            salary: 1300,
            category: "Designer",
            id: 3,
        },
    ];
    return workers;
};
const getWorkerById = function (id) {
    const worker = getAllworkers().find((worker) => worker.id === id);
    return worker;
};
const PrintWorker = function (worker) {
    console.log(`${worker.name} ${worker.surname} got salary: ${worker.salary}`);
};
const workers = getAllworkers();
console.log("=================================================================================");
console.log();
console.log("workers:");
console.table(workers);
console.log("=================================================================================");
console.log();
console.log("get worker by id = 1:");
console.table(getWorkerById(1));
console.log("=================================================================================");
console.log();
console.log("Print worker:");
PrintWorker(workers[1]);
console.log("=================================================================================");
console.log();
