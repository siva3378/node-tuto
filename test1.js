var _ = require('lodash');

var b = [1,2,3,4,6,7,9];
//var b = [[1,2], [3,4], ....];


function separate(array, noOfElements){
    console.log("started..");    
    var result = _.chunk(array, noOfElements);
    // logic
    console.log("got result..", result);
}


separate(b, 3);