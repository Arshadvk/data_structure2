class Queue {
    constructor(size) {
        this.front = -1
        this.rear = -1
        this.array = new Array(size)
    }

    nq(value) {
        if (this.rear == this.array.length - 1) {
            return //queue is full
        }
        if (this.rear == -1) {
            // queue is empty 
            this.front = 0
            this.rear = 0
            this.array[0] = value
            return
        }
        this.rear++
        this.array[this.rear] = value
    }

    dq() {
        if (this.front == -1) {
            return //queue is empty
        }
        if (this.front == this.rear) {
            this.front = -1
            this.rear = -1
            return
        }
        this.front++
    }
    display() {
        for (let i = this.front; i <= this.rear; i++) {
            console.log(this.array[i]);

        }
    }
}

let queue = new Queue(50)

queue.nq(30)
queue.nq(80)
queue.nq(40)
console.log("before");
queue.display()
console.log("after");
queue.dq()
queue.display()