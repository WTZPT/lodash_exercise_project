const test = require('ava');
const {
    path_getValue_get_and_at,
    updateValue_set_setWith_update_updateWith,
    removeValue_unset,
    validValue_has
} = require("../../src/object/index")

test('', t => {
    let res = path_getValue_get_and_at();
    t.log(res)
    t.pass()
})

test('updateValue_set_setWith_update_updateWith', t => {
    let res = updateValue_set_setWith_update_updateWith();
    t.log(res)
    t.pass()
})

test('removeValue_unset', t => {
    let res = removeValue_unset();
    t.log(res);
    t.pass();
})

test('validValue_has', t => {
    let res = validValue_has();
    t.log(res)
})
