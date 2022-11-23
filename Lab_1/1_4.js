"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createCustomerID = function (name, id) {
    return name + " " + id;
};
const myId = createCustomerID("Ann", 10);
console.log(myId);
let idGenerator = (name, id) => name + " " + id;
console.log((idGenerator = createCustomerID)("Vasya", 55));
