const array = [];

for(let i = 0, j = 10; i < j; i++) {
    array.push(Math.round(Math.random() * 100))
}
console.log(array)


const mergeSort = array => {
    if(array.length < 2) {
        return array;
    }

    const middle =  Math.floor(array.length / 2);
    const left = array.slice(0, middle), right = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
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


const start = Date.now()
const sorted = mergeSort(array);
const end = Date.now()
console.log(sorted);

const rev = sorted.reverse();
console.log(rev);

const sorted_rev = mergeSort(rev);
console.log(sorted_rev);



console.log('elapsed', (end - start) / 60_000)