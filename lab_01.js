// learning 

const ex_list = [100, 70, 45, 50];

function insertionSort(ex_list) {
    const n = ex_list.length;
        for (let i = 1; i < n; i++) {
            let current = ex_list[i];
            let j = i-1;
            while((j > - 1) && (current < ex_list[j])) {
                ex_list[j + 1] = ex_list[j];
                j--;
            }
            ex_list[j+1] = current;
        }
    return ex_list;
}



insertionSort(ex_list);
console.log(ex_list);