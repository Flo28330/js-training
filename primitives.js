//*Math min, max, abs, sign, round, floor, ceil, trunc, random*
//String
//Transform slice, split, replace, toUpperCase, toLowerCase, trim, trimRight, trimLeft, padStart, padEnd
//Search includes, startsWith, endsWith, indexOf, lastIndexOf, charCodeAt
//Arrays Array.from, Array.isArray, fill*
//Search find, findIndex, includes, indexOf, lastIndexOf
//Transform concat, join, slice, pop*, push*, shift*, unshift*, splice*
//Re-order reverse*, sort*
//Functionnal Iteration forEach, filter, some, every, map, reduce, reduceRight
//Object keys, values, entries, assign, fromEntries

function removeChar(str){
    let str = "eloquent";
    console.log(removeChar(str))
    return str.slice (1,-1)
}


const assert = require('assert')

assert.strictEqual(typeof str, 'string')
assert.strictEqual(str, '1337')

assert.strictEqual(typeof num, 'number')
assert.strictEqual(num, 42)

assert.strictEqual(typeof bool, 'boolean')
assert.strictEqual(bool, false)

assert.strictEqual(typeof undef, 'undefined')
assert.strictEqual(undef, undefined)    