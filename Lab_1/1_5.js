"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createCustomer = function (name, age, city) {
    if (age)
        console.log(`Customer name is ${name} and age is ${age}`);
    else if (age && city)
        console.log(`Customer name is ${name}, age is ${age} and city is ${city}`);
    else
        console.log(`Customer name is ${name}`);
};
createCustomer("Ivan");
createCustomer("John", 12);
createCustomer("Molly", 25, "Kyiv");
console.log();
var Category;
(function (Category) {
    Category["BA"] = "Business analyst";
    Category["DEVELOPER"] = "Developer";
    Category["DESIGNER"] = "Designer";
    Category["QA"] = "QA";
    Category["SCRUM"] = "Scrum master";
})(Category || (Category = {}));
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
const getWorkersNamesByCategory = function (category = Category.DESIGNER) {
    const workers = getAllworkers();
    const workersByCategory = [];
    workers.filter((worker) => {
        if (worker.category === category) {
            workersByCategory.push(worker.surname);
        }
    });
    if (workersByCategory.length)
        return workersByCategory;
    else
        return "Currently there is no employee with this category";
};
console.table(getAllworkers());
console.log();
console.log("getWorkersNamesByCategory function result with default parameter:", getWorkersNamesByCategory());
const logFirstAvailable = function (workers = getAllworkers()) {
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
console.log("logFirstAvailable function result:");
logFirstAvailable();
const getWorkersById = function (id) {
    const worker = getAllworkers().find((worker) => worker.id === id);
    if (typeof worker === "undefined") {
        return `Currently there is no avaliable employee with id: ${id}`;
    }
    else
        return worker;
};
const checkoutWorker = function (customer, workerIDs) {
    const workers = [];
    console.log(`The customer is ${customer}`);
    workerIDs.forEach((id) => {
        const worker = getWorkersById(id);
        typeof worker === "string"
            ? workers.push(worker)
            : workers.push(worker.name + " " + worker.surname);
    });
    return workers;
};
console.log("checkoutWorker function result:");
const myWorkers = checkoutWorker("Ann", [1, 2, 4]);
myWorkers.forEach((element) => {
    console.log(element);
});
