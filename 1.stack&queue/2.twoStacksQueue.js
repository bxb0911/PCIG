// 编写一个类，用两个栈实现队列，支持队列的基本操作（add、poll、peek）
class TwoStacksQueue { 
  constructor() { 
    this.stackPush = []
    this.stackPop = []
  }
  add(pushInt) { 
    this.stackPush.push(pushInt)
  }
  poll() { 
    if (this.stackPop.length === 0 && this.stackPush.length === 0) {
      throw new Error('Queue is empty!')
    } else if (this.stackPop.length === 0) { 
      while (this.stackPush.length > 0) { 
        this.stackPop.push(this.stackPush.pop())
      }
    }
    return this.stackPop.pop()
  }
  peek() {
    if (this.stackPop.length === 0 && this.stackPush.length === 0) {
      throw new Error('Queue is empty!')
    } else if (this.stackPop.length === 0) { 
      while (this.stackPush.length > 0) { 
        this.stackPop.push(this.stackPush.pop())
      }
    }
    return this.stackPop[this.stackPop.length - 1]
  }
}
const queue = new TwoStacksQueue()
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
queue.add(5)
console.log(queue.poll())
console.log(queue.peek())
queue.add(6)
queue.add(7)
queue.add(8)
queue.add(9)
queue.add(10)
console.log(queue.poll())
console.log(queue.peek())
console.log(queue.stackPush, queue.stackPop)
