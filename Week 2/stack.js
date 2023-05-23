class Stack{
     
    constructor(length){
     this.arr = new  Array(length)
     this.top = -1
     this.length = length
    }

    push(value){
        if (this.top == this.length -1) {
            return //stack is full
        }
       
            this.top++;
            this.arr[this.top]=value
        
    }
    pop(){
        if(this.top == -1){
            return //stack is empty
        }
        let temp = this.arr[this.top]
        this.top--
        return temp
    }

    display(){
        for (let i = 0; i <= this.top ; i++) {
            console.log(this.arr[i]); 
            
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