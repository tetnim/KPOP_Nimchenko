const createCustomerID = function (name: string, id: number): string {
  return name + " " + id;
};

const myId: string = createCustomerID("Ann", 10);
console.log(myId);

type createCustomerID = (name: string, id: number) => string;
let idGenerator: createCustomerID = (name, id) => name + " " + id;

console.log((idGenerator = createCustomerID)("Vasya", 55));

export {};
