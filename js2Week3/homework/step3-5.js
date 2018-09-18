'use strict';

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (i = 0; i < arr.length; i++) {
        for (x = 0; x < arr[i].length; x++) {

            product = product * arr[i][x];
        }
    }
    // Only change code above this line

    return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);






//Below code to be modified--------------------------------

/*
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
 */
