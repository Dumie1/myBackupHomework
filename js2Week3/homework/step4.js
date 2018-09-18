'use strict';
/*const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
-------------------------------------------------------*/
/* SOLVING IT USING CONST
var num1 = 10;
const addSix = function () {
    let createBase = 6;
    return createBase + num1;
};

console.dir(addSix());

var num1 = 21;
console.dir(addSix());
-------------------------------------------------------*/

function addSix(x) {
    return function createBase() {
        return x + 6;
    };
}

let add10 = addSix(10);
let add21 = addSix(21);

console.log(add10());
console.log(add21()); 

//references
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
