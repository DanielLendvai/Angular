/* string
number
boolean
array
enum
tuple
any
void
never
 */

let lname: string;
lname = "Daniel";
let newName = lname.toUpperCase();
// console.log(newName)

let age: number;
let dob = "25";
age = 25;
age = 25.5;
let result = parseInt(dob);

let isValid: boolean = false;
// console.log(isValid);

let empList: string[];
empList = ["ABC", "bca", "BCa"];

let numList: Array<number> = []; //generics

numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num < 5);
// results = numList.find((num) => num = 5) / can't assign undefined, results is a number array
results
    .slice(0)
    .reverse()
    .map((num) => numList.push(num));
console.log(numList);

const enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;


let swapNumbs: [number,number];
function swapNumbers(num1:number,num2:number) : [number,number] {
    return [num2,num1]
}
swapNumbs = swapNumbers(10,20)
console.log(swapNumbs[0])

let department: any; //try to avoid
department = "IT";
department = 10;