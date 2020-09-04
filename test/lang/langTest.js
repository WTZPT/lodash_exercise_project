const test = require('ava');
const {
    isArray, isArrayBuffer,isEqualWith_VS_isEqual
} = require('../../src/lang/index')


test('isArray', (t) => {
    let res = isArray();
    t.log(res)
    t.pass();
})

test('isArrayBuffer', (t) => {
    let res = isArrayBuffer();
    t.log(res)
    t.pass();
})

test('isEqualWith_VS_isEqual', (t) => {
    let res = isEqualWith_VS_isEqual();
    t.log(res)
    t.pass();
})


