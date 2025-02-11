const _ = require('lodash');

// Original array with duplicates
const arr = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];

// Remove duplicates using lodash's uniq function
const uniqueArr = _.uniq(arr);

// Print the array with duplicates removed
console.log(uniqueArr);
