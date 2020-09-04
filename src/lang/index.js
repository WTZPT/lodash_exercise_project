var _ = require('lodash');

function isArray() {
    //https://www.lodashjs.com/docs/lodash.isArray
    //检查 value 是否是 Array 类对象
    //如果value是一个数组返回 true，否则返回 false。
    let p1 = [1, 2, 3, 4];
    let p2 = [{'k': 121}, {"ioio": 54354}];
    let p3 = 'pppippda';
    return {res1: _.isArray(p1), res2: _.isArray(p2), res3: _.isArray(p3)}
}

function isArrayBuffer() {
    //https://www.lodashjs.com/docs/lodash.isArrayBuffer
    //检查 value 是否是 ArrayBuffer 对象
    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
    //ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。它是一个字节数组，通常在其他语言中称为“byte array”。
    return {res1: _.isArrayBuffer(new ArrayBuffer(2)), res2: _.isArrayBuffer(new Array(2))}
}

function isGreeting(value) {
    return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, othValue) {
    if (isGreeting(objValue) && isGreeting(othValue)) {
        return true;
    }
}

function isEqualWith_VS_isEqual() {
    //https://www.lodashjs.com/docs/lodash.isEqual
    //执行深比较来确定两者的值是否相等,类似java的equal
    //https://www.lodashjs.com/docs/lodash.isEqualWith
    //与isEqual类似，多了一个自定义比较规则
    var object = {'a': 1};
    var other1 = {'a': 1};

    var array = ['hello', 'goodbye'];
    var other2 = ['hi', 'goodbye'];

    return {
        isEqualRes: _.isEqual(object, other1),
        isEqualWithRes: _.isEqualWith(array, other2, customizer)
    }
}

module.exports = {
    isArray,
    isArrayBuffer,
    isEqualWith_VS_isEqual
}
