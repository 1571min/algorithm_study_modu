const _ = require('lodash');

function recursionFib(n) {
    if(n<=1) {
        return n;
    }
    return recursionFib(n-1)+recursionFib(n-2);
}

function roopFib(n){
    let result = 0;
    let before = 1;
    let after = 1;
    if(n<=1) return n;
    _.each(Array(n-1),()=>{
        result = after;
        after = before + after;
        before = result;
    })
    return result;
}

const memoizationRecursionFib = (()=>{
    let save = {};
    let result = 0;
    const fib = (n) => {
        if(n<=1){
            return n;
        }else{
            result = save[n]||fib(n-1) + fib(n-2);
            save[n] = result;
            return result;
        }
    };
    return fib;
})()

const result = memoizationRecursionFib(50);
console.log(result);
