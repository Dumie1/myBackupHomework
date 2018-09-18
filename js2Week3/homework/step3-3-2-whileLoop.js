'use strict';

function repeatStringNumTimes(str, num) {
    let accumulatedStr = '';

    while (num > 0) {
        accumulatedStr += str;
        num--;
    }

    return accumulatedStr;
}

repeatStringNumTimes('abc', 3);

//repeatStringNumTimes();
/*Code Explanation:
Create an empty string variable to store the repeated word.
Use a while loop or for loop to repeat code as many times as needed according to num
Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
At the end of the loop, return the variable for the repeated word.*/

/*ADVANCED SOLUTION BELOW-----
function repeatStringNumTimes(str, num) {
  return num >= 0 ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);
*/