//Homework for JS week2:
//https://github.com/HackYourFuture/JavaScript2/blob/master/Week2/MAKEME.md
//Rewrite the program using map and filter don't forget to use =>.

/*'use strict';
const numbers = [1, 2, 3, 4];
let newNumbers = numbers.filter(function (number) {
    return (number % 2 !== 0);
}).map(function (number) {
    return number * 2;
});
console.log("The doubled numbers are", newNumbers); */

//references
//http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/




//MY CORRECTIONS BELOW

'use strict';

const numbers = [1, 2, 3, 4];
const newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);
console.log("The doubled numbers are", newNumbers);
