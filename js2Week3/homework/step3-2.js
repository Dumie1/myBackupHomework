'use strict';

function sayThree(threeCallback) {
    console.log(threeCallback + ' is divisible by three');
};

function sayFive(fiveCallback) {
    console.log(fiveCallback + ' is divisible by five');
};

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

    let values = [];
    for (var i = startIndex; i <= stopIndex; i++) {
        values.push(i);

        // if (threeCallback = values => values.filter(i => i % 3 == 0));
        // console.log(threeCallback(values));

        if (i % 3 == 0) {
            threeCallback(i);
        }

        // if (fiveCallback = values => values.filter(i => i % 5 == 0));
        //console.log(fiveCallback(values));
        if (i % 5 == 0) {
            fiveCallback(i);
        }
    }
    console.log(values);
}

threeFive(10, 15, sayThree, sayFive);












































/*
'use strict';

function sayThree(threeCallback) {
    console.log(threeCallback + ' is divisible by three');
};

function sayFive(fiveCallback) {
    console.log(fiveCallback + ' is divisible by five');
};

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

    let values = [];
    for (var i = startIndex; i <= stopIndex; i++) {
        values.push(i);

        // if (threeCallback = values => values.filter(i => i % 3 == 0));
        // console.log(threeCallback(values));

        if (i % 3 == 0) {
            threeCallback(i);
        }

        // if (fiveCallback = values => values.filter(i => i % 5 == 0));
        //console.log(fiveCallback(values));
        if (i % 5 == 0) {
            fiveCallback(i);
        }
    }
    console.log(values);
}

threeFive(10, 15, sayThree, sayFive);
*/

//where to find ideas for my homework for this question
//https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
//https://stackoverflow.com/questions/8069315/create-array-of-all-integers-between-two-numbers-inclusive-in-javascript-jquer
//https://www.youtube.com/watch?v=pTbSfCT42_M
//https://www.youtube.com/watch?v=GxyFlXbhdsY
