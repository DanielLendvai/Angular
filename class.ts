class Employee {
    #id: number;
    protected name: string;
    address: string;

    get empId(): number {
        return this.#id;
    }
    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }

    getNameWithAddress(): string {
        return this.name + " " + this.address;
    }
}
let john = new Employee(1, "John", "Route 56");
john.empId = 200;
console.log(john.empId)

class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let address = john.getNameWithAddress();
console.log(address);
let mike = new Manager(2, "Mike", "Drive through");
console.log(mike.getNameWithAddress());
