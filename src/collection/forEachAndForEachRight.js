
var _ = require('lodash');

function forEach() {
    let numberList = [1,2,3,4,7,5,9,6,0,4,5]
    let res= '';
    _.forEach(numberList,(num,key)=>{
         res += `${key} - ${num} \n`
    })
    return res;
}

function forEachRight() {
    let numberList = [1,2,3,4,7,5,9,6,0,4,5];
    let res= '';
    _.forEachRight(numberList,(num,key)=>{
        res += `${key} - ${num} \n`
    })
    return res
}


module.exports = {
    forEach,forEachRight
}

