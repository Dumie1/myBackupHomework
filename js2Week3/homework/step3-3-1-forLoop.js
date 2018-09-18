'use strict';

function repeatStringNumTimes(str, num) {

    let strRepeated = "";

    for (var i = 0; i < num; i++) {
        strRepeated += str;
    }

    return strRepeated;
}

repeatStringNumTimes("abc", 3);

/*Code Explanation:
Create an empty string variable to store the repeated word.
Use a while loop or for loop to repeat code as many times as needed according to num
Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
At the end of the loop, return the variable for the repeated word.*/

//Below code to be modified---------------------
/*
function repeatStringNumTimes(str, num) {
    // repeat after me
    return str;
}

repeatStringNumTimes("abc", 3);
*/