function swap(array, i, j) {
    temp = array[i];
    array[i] = array[j]
    array[j] = temp
}


function bubblesort(array) {
    for (let i = 0; i < array.length - 1; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {

            if (array[j] > array[j + 1]) {

                swap(array , j , j+1)
            }

        }
    }
}

let array = [6,5,4,3,6,7,1,9]
console.log(array);
bubblesort(array);
console.log(array);

// Input: 
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated 
// into ascending order.
let arr = [0, 2, 1, 2, 0]
bubblesort(arr)
console.log(arr);
