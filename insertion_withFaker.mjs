
import * as fs from 'fs'


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let k = i; k > 0 && array[k] < array[k - 1]; k--) {
            const temp = array[k]
            array[k] = array[k - 1]
            array[k - 1] = temp
        }
    }
}

const array = fs.readFileSync('data2.txt').toString().split('\n')
console.log(array.slice(0,10));

const start = Date.now()
insertionSort(array);
const end = Date.now()


console.log('elapsed', (end - start) / 60_000)