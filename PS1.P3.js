//
// string = 'abcdefghijklmncopqrstcuvwxyzaacaaa';
// console.log(string.split(/(?=c)/g));
// console.log(string);
// let mod = string.replace(/a/g, 'A');
// console.log(mod);
//
// let num = string.match(/a/g);
// console.log(num.length);
// console.log(mod.length);
//
// const obj = {
//     original: string,
//     modified: mod,
//     numReplaced: num.length,
//     length: mod.length
// }
// console.table(obj);

const doOperation = (string, operation) => operation(string);

const expression1 = doOperation(
    'supercalifragilisticexpialidocious',
    (string) => string.split(/(?=c)/g)
)

const obj = {
    original: str = 'supercalifragilisticexpialidocious',
    modified: str.replace(/a/g, 'A'),
    numReplaced: str.match(/a/g).length,
    length: str.length
}
console.log(`split at c: ${expression1}`);
const expression2 = doOperation(
    'supercalifragilisticexpialidocious',
    (string) => console.table(obj)
)
module.exports(doOperation, expression1, expression2, obj)




// const doOperation = (value, operation, cb) => cb(operation(value));
// let result = doOperation(string, operation, )
// const decoratedFunction = doOperation(
//     string,
//     (lambda) => (lambda)(string)
// )


// function funko(String) {
//     return decF => ` ${String} ${decF}`;
// }
// const funko = string => funko(string)
//
// function compliment(first) {
//     return last => `Why hello, ${first} ${last}. You look most fetching today.`;
// }
// const complimentPerson = person => compliment(firstname(person))(lastname(person));
