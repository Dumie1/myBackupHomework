'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];

console.log(arr2d.join('\n') + '\n\n');

function size(arr2d) {
    let row_count = arr2d.length;
    let row_sizes = []
    for (var i = 0; i < row_count; i++) {
        row_sizes.push(arr2d[i].length)
    }
    return [row_count, Math.min.apply(null, row_sizes)]
}
size([[1, 2], [3, 4], [5, 6]])

console.log('The length of array is : ' + (arr2d.length));

//References
//https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array
