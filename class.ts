import { Login, User } from "./interface";

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements Login {
    #id: number;

    protected name: string;

    address: Address;

    get empId(): number {
        return this.#id;
    }
    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: Address) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }
    Login(): User {
        return { name: "John", id: 1, email: "" };
    }

    getNameWithAddress(): string {
        return this.name + " " + this.address;
    }
}

let john = new Employee(1, "John", {
    street: "street",
    city: "city",
    state: "state",
    pin: "pin",
});
john.empId = 200;
console.log(john.empId);

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }
    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let address = john.getNameWithAddress();
console.log(address);
let mike = new Manager(2, "Mike", {
    street: "mikestreet",
    city: "mikecity",
    state: "mikestate",
    pin: "mikepin",
});
console.log(mike.getNameWithAddress());
