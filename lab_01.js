

// const array = [5, 6, 7, 8, 9, 10];
const element = 10
const array = [];

if(element == 0) {
    console.log(null)
}

do {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    if (!array.includes(randomNumber)) {
        array.push(randomNumber);
    }

} while (array.length < element);
console.log(array)
//array of random numbers (not repeating)



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







