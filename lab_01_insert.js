
const array = [];

for(let i = 0, j = 10; i < j; i++) {
    array.push(Math.round(Math.random() * 100))
}
console.log('unsorted list: ', array)


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let k = i; k > 0 && array[k] < array[k - 1]; k--) {
            const temp = array[k]
            array[k] = array[k - 1]
            array[k - 1] = temp
        }
    }
}



//sorted array
const start = Date.now()
insertionSort(array);
const end = Date.now()
console.log('sorted list:   ', array);


//reversed the sorted array 
const reverse_list = array.reverse();
console.log(reverse_list);

//sorted the reversed array
insertionSort(reverse_list);
console.log(reverse_list);

console.log('elapsed', (end - start) / 60_000)







