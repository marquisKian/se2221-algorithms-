

const array = [];

for(let i = 0, j = 10; i < j; i++) {
    array.push(Math.round(Math.random() * 100))
}
console.log(array)


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let k = i; k > 0 && array[k] < array[k - 1]; k--) {
            const temp = array[k]
            array[k] = array[k - 1]
            array[k - 1] = temp
        }
    }
}


const start = Date.now()
insertionSort(array);
const end = Date.now()
console.log(array);

console.log('elapsed', (end - start) / 60_000)







