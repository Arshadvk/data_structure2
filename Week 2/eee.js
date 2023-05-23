class Stack{
    constructor(size){
        this.array = new Array(size)
        this.size = size 
        this.top = -1
    }
    push(value){
        
        this.top++
        this.array[this.top]=value
    }
    pop(){
        if(this.top == -1 ){
            return
        }
        this.top--
    }
    deletemid(){
        if(this.top == -1 ){
            return
        }
        const mid = Math.floor( this.top/ 2)
       return this.array[mid]=undefined
    }
    display(){
        for(let i=0 ; i<=this.top ; i++ ){
            console.log(this.array[i])
        }
    }
}

const stack =new Stack(10);
stack.push(10)
stack.push(20)
stack.push(30)
stack.display()
console.log("after");
stack.deletemid()
stack.display()