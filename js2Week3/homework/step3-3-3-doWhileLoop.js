'use strict';

function repeatStringNumTime(str, num) {

    var accumulatedStr = '';

    do {
        accumulatedStr += str;
        num--;
    }
    while (num > 0);

    return accumulatedStr;
}

repeatStringNumTime('abc', 3);
