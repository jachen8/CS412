/*
Write a function that takes as its input a formatted string, such as these:
‘4+2’
‘5*7’
‘6-1’
‘9/2’
‘2^8’ (where ^ is exponentiation)
You’ll use these as test values when writing your Chai test suites.
This function should
Determine the operator (+, *, -, ^, or /) embedded in the string
Return a function to implement the input operator that returns the result
For example, if the input string is ‘8%3’, return (left, right) => left % right
Execute the returned function to evaluate and print each expression. For example,
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)


You can assume that the format of the input string is fixed (i.e. a digit, an operator, and a digit,
always the same length). Write a test that tries each of the five expressions above.
 */

// function evaluate(s){
//     return new Function('return ' + ev)();
// }

const getFunc = func => {
    let left = parseInt(func.charAt(0));
    let right = parseInt(func.charAt(2));
    let op = func.charAt(1);
    switch (op) {
        case '+':
            return () => left + right;
        case '-':
            return () => left - right;
        case '*':
            return () => left * right;
        case '/':
            return () => left / right;
        case '%':
            return () => left % right;
        case '^':
            return () => left ** right;
    }
}
module.exports =  {getFunc}
// console.log(`${getFunc('8%3')()}`);
// console.log(getFunc('4+2')());
// console.log(getFunc('5*7')());
// console.log(getFunc('6-1')());
// console.log(getFunc('9/2')());
// console.log(getFunc('2^8')());