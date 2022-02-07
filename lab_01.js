
// const example_list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

//trying to put a random number generator into a 10 element list
const array  = Array.from({length: 20}, () => Math.floor(Math.random() * 20));
console.log(array);


function insertionSort(array) {
    const n = array.length;
        for (let i = 1; i < n; i++) {
            let current = array[i];
            let j = i-1;
            while((j > - 1) && (current < array[j])) {
                array[j + 1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
    return array;
}

insertionSort(array);
console.log(array);







