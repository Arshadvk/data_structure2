class hashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        if (typeof key === "string") {
            let total = 0
            for (let i = 0; i < key.length; i++) {
                total += key.charCodeAt(i);
            }
            return total % this.size
        } else {
            return key % this.size
        }
    }


    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const samekeyItem = bucket.find((item) => item[0] === key);
            if (samekeyItem) {
                samekeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const samekeyItem = bucket.find((item) => item[0] === key);
            if (samekeyItem) {
                return samekeyItem[1]
            }
        }
        return undefined
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index]
        if (bucket) {
            const samekeyItem = bucket.find(item => item[0] === key)
            if (samekeyItem) {
                bucket.splice(bucket.indexOf(samekeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new hashTable(50);

table.set("name", "Arshad");
table.set("age", "20");
table.set("mane", "dfg");
table.set("naem", "dgfdf");
console.log(table.get('name'));

table.display();
table.remove("mane")
console.log("after");
table.display();


class Queue {
    constructor(size) {
        this.front = -1
        this.rear = -1
        this.array = new Array(size)
    }
    addrear(value) {
        if (this.rear == this.array.length - 1) {
            return //return is full
        }
        if (this.rear == -1) {
            // queue empty
            this.front = 0
            this.rear = 0
            this.array[0] = value
            return
        }
        this.rear++
        this.array[this.rear] = value
    }

    deleteFront(){
        if (this.front == -1) {
            return //queue is empty
        }
        if(this.front == this.rear){
            this.front = -1
            this.rear = -1
            return
        }
        this.front++
    }
    display(){
        for (let i = this.front ; i <= this.rear; i++) {
             console.log(this.array[i]);
            
        }
    }

}

let queue = new Queue(50)

queue.addrear(20)
queue.addrear(40)
console.log("before");
queue.display()
queue.deleteFront()
console.log("after");
queue.display()


class Stack{
    constructor(size){
        this.array = new Array(size)
        this.top = -1 
        this.length = size
        
    }
    push(value){
        if (this.top == this.length -1) {
            return // stack is full 
        }
        this.top++
        this.array[this.top]=value
    }

    pop(){
        if(this.top == -1){
            return //stack is empty
        }
        let temp = this.array[this.top]
        this.top--
        return temp 
    }
    display(){
        for (let i = 0; i <= this.top ; i++) {
           console.log(this.array[i]);
            
        }
    }
}

let stack = new Stack(50);

console.log("before");
stack.push(1)
stack.push(6)
stack.push(2)
stack.display()
console.log("after");
stack.pop()
stack.display()


function mergeSort(array){
    if(array.length <= 1){
        return array 
    }else{
        const mid = array.length / 2;
        const left = array.slice(0 , mid)
        const right = array.slice(mid)
        return merge(mergeSort(left),mergeSort(right))
    }
    function merge(left , right ){
        const sorted = []
        while (left.length && right.length ) {
            if (left[0]<=right[0]) {
                sorted.push(left.shift())
            }else{
                sorted.push(right.shift())
            }
        }
        return [...sorted , ...left , ...right]
    }
}

console.log(mergeSort([9,7,5,4,3,2,1]));


function quicksort(array){
    if(array.length <= 1){
        return array
    }else{
        var pivot = array[0];
        var left = []
        var right =[]
        for(var i = 1 ; i< array.length ; i++){
            if(array[i]< pivot){
                left.push(array[i])
            }else{
                right.push(array[i])
            }
        }
        return quicksort(left).concat(pivot , quicksort(right))
    }
}

var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
console.log(array);

var sortedArray = quicksort(array);
console.log(sortedArray);