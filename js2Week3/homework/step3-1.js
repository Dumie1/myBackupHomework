'use strict';

function foo(func) {
    let x = 12;

    console.log('My address is :' + x);
    func();
}
function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);

//--------------------------------------------

//Reference
//https://www.youtube.com/watch?v=KiLB8sViPMA
