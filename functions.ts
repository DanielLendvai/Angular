//typesafe functions and different ways to write them

// ? - optional parameter
function add(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log("Add: " + add(2, 3));

const mult = function (num1: number, num2: number): number {
    return num1 * num2;
};
console.log("Multiple: " + mult(2, 3));

// = - required parameter
const sub = (num1: number, num2: number, num3 = 10): number =>
    num1 - num2 - num3;
console.log("Subtract: " + sub(3, 2));
console.log("Subtract: " + sub(3, 2, 5));

//rest parameters
function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add2(2, 3, ...[1,2,3,4,5]));
