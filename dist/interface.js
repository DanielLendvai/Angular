"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = {
    name: "John",
    id: 1,
    email: "",
};
let employee = { name: "John", id: 1, email: "", salary: 1000 };
let [user1, user2, ...restUsers] = [
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
console.log(user1);
console.log(user2);
console.log(restUsers);
// let result = restUsers.filter(user => user.id > 2)
//# sourceMappingURL=interface.js.map