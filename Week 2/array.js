let arr = [1,2,4,4,5,6]
let arra = []
let j = arr.length -1
for(i=0 ; i< j ; i++ , j--){
    arra[i] = arr[i]+arr[j]
}

console.log(arra);