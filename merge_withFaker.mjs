
import * as fs from 'fs'

function mergeSort(array) {
    if(array.length < 2) {
        return array;
    }

    const middle =  Math.floor(array.length / 2);
    const left = array.slice(0, middle), right = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
};

function merge (left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        }
        else{
            result.push(right.shift());
        };
    }
    while(left.length) {
        result.push(left.shift());
    };
    while(right.length){
        result.push(right.shift());
    };
    return result;
};

const array = fs.readFileSync('data2.txt').toString().split('\n')
console.log(array.slice(0,10));

const start = Date.now()
mergeSort(array);
const end = Date.now()


console.log('elapsed', (end - start) / 60_000)