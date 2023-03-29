// this example shows how to use and chain promises

"use strict";

let asyncFunction = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};

asyncFunction()
    .then(function (val) {
        console.log(`Promise 1: ${val}`);
        return asyncFunction2()
    })
    .then(function (val) {
        console.log(`Promise 2: ${val}`);
    })

// we can chain promises just usign then after each then

console.log('the code is asynchronous');