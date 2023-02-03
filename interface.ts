export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let { name: userName, email: userLogin }: User = {
    name: "John",
    id: 1,
    email: "",
};

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

export interface Login {
    Login(): User;
}

let [user1,user2,...restUsers]: User[] = [
    {
        name: "John",
        email: "email",
        id: 1,
    },
    {
        name: "Dave",
        email: "email2",
        id: 2,
    },
    {
        name: "Matt",
        email: "email3",
        id: 3,
    },
];
console.log(user1)
console.log(user2)
console.log(restUsers)

// let result = restUsers.filter(user => user.id > 2)