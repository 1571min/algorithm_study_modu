
const fs = require('fs');

let inputJSON = fs.readFileSync('input_a.json');
let inputArr = JSON.parse(inputJSON);

// let input = Array.from(Array(400000).keys()).reverse();

function bubbleSort(arr, n) {
    for (let i = 0; i < n-1; i++) {
        bubble(arr, i, n);
    }ㅣ
}

function bubble(arr, i, n) {
    for (let j = n-1; j > i; j--) {
        if(arr[j]<arr[j-1]){
            let temp = arr[j];
            arr[j]= arr[j-1];
            arr[j-1] = temp;
        }
    }
}


let beforeTimestamp = new Date().getTime();
bubbleSort(inputArr,inputArr.length);
let afterTimestamp = new Date().getTime();


console.log('소요 시간 ',afterTimestamp-beforeTimestamp);
//input a => 812997ms


//에디님 version
function bubbleSort (A) {
    for (let i = 0; i < A.length; i++) {
        for (let j = A.length - 1; j > i; j--) {
            if (A[j] < A[j - 1]) {
                let buffer = A[j]
                A[j] = A[j - 1]
                A[j - 1] = buffer
            }
        }
    }
}

//로드님 version
var sorted = bubbleSort(array, isAsc);

function bubbleSort(array, asc) {
    var length = array.length;
    var i, j, temp;
    for (i=0; i<length - 1; i=i+1) {
        for (j=0; j<length - 1 - i; j=j+1) {

            if (asc ? array[j + 1] < array[j] : array[j] < array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}
