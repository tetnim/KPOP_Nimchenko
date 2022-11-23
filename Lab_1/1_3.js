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
const getWorkersById = function (id) {
    const worker = getAllworkers().find((worker) => worker.id === id);
    if (typeof worker === "undefined") {
        return `Currently there is no employee with id: ${id}`;
    }
    else
        return `Worker with id ${worker.id} is ${worker.name} ${worker.surname} and his salary is ${worker.salary}`;
};
const workers = getAllworkers();
console.table(workers);
console.log();
console.log("Workers from the Developer category: ");
workers.forEach((worker) => {
    if (worker.category === "Developer") {
        console.log(worker.name + " " + worker.surname);
    }
});
console.log();
console.log("getWorkersById function result:");
console.log(getWorkersById(1));
console.log(getWorkersById(10));
