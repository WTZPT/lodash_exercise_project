const test = require('ava');
const {
    forEach,forEachRight
} = require('../src/collection/forEachAndForEachRight')



test('forEach',(t)=>{
    //let res = forEach();
    let  res = forEachRight();
   // console.log(res)
    t.pass()
})

