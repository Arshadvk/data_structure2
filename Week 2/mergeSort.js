function mergeSort (array){
	if (array.length <=1) {
		return array
	}else{
		const mid = array.length / 2;
		const left  = array.slice(0,mid);
		const right = array.slice(mid);
		return merge(mergeSort(left),mergeSort(right));
	}

	function merge(left , right){
		const sorted = []
		while (left.length && right.length) {
			if(left[0]<=right[0]){
				sorted.push(left.shift())
			}else{
				sorted.push(right.shift())
			}
		}
		return [...sorted ,...left , ...right]
	}
}

const arr=[2,33,2,1,4,5,44,3,2]
console.log(mergeSort(arr));
console.log(mergeSort([3,5,6,2,1,3,0]));