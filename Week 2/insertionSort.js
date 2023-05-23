function insertion(array) {
    let i, j, key
    for (i = 1; i < array.length; i++) {
        key = array[i]
        j = i - 1
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = key
    }
    return array
}
let arr = [8, 5, 2, 9, 6, 3, 7, 4, 1]
insertion(arr)
console.log(arr);