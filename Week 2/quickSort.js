function quicksort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		var pivot = array[0];
		var left = [];
		var right = [];
		for (var i = 1; i < array.length; i++) {
			if (array[i] < pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}
		return quicksort(left).concat(pivot, quicksort(right));
	}
} 
var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
console.log(array);
  
var sortedArray = quicksort(array);
console.log(sortedArray);

function sort(array) {
	if (array.length <= 1) {
		return array
	}else{
		var pivot = array[0]
		var right = []
		var left  = []

		for (let i = 1 ; i < array.length; i++) {
			if(array[i]< pivot){
				left.push(array[i])
			}else{
				right.push(array[i])
			}
			
		}
		return sort(left).concat(pivot , sort(right));
	}
}

console.log(sort([9,8,7,5,4,32,]));