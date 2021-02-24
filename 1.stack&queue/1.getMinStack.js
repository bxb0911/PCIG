// 设计一个有 getMin 功能的栈
// 方法一实现
class MyStack1 { 
  constructor() { 
    this.stackData = []
    this.stackMin = []
  }
  push(newNum) {
    if (this.stackMin.length === 0) {
      this.stackMin.push(newNum)
    } else if (newNum <= this.getmin()) { 
      this.stackMin.push(newNum)
    }
    this.stackData.push(newNum)
  }
  pop() { 
    if (this.stackData.length === 0) { 
      throw new Error('Your stack is empty')
    }
    let value = this.stackData.pop()
    if (value === this.getmin()) { 
      this.stackMin.pop()
    }
    return value
  }
  getmin() { 
    if (this.stackMin.length === 0) { 
      throw new Error('Your stack is empty')
    }
    return this.stackMin[this.stackMin.length - 1]
  }
}
// 方法一测试
const mystack1 = new MyStack1()
mystack1.push(3)
mystack1.push(4)
mystack1.push(5)
mystack1.push(1)
mystack1.push(2)
mystack1.push(1)
console.log(mystack1.stackData, mystack1.stackMin)
console.log(mystack1.pop(), mystack1.pop(), mystack1.pop(), mystack1.pop(), mystack1.pop(), mystack1.pop())

// 方法二实现
class MyStack2 { 
  constructor() { 
    this.stackData = []
    this.stackMin = []
  }
  push(newNum) { 
    if (this.stackMin.length === 0) {
      this.stackMin.push(newNum)
    } else { 
      this.stackMin.push(Math.min(newNum, this.getmin()))
    }
    this.stackData.push(newNum)
  }
  pop() {
    if (this.stackData.length === 0) { 
      throw new Error('Your stack is empty')
    }
    this.stackMin.pop()
    return this.stackData.pop()
  }
  getmin() {
    if (this.stackMin.length === 0) { 
      throw new Error('Your stack is empty')
    }
    return this.stackMin[this.stackMin.length - 1]
  }
}

// 方法二测试
const mystack2 = new MyStack2()
mystack2.push(3)
mystack2.push(4)
mystack2.push(5)
mystack2.push(1)
mystack2.push(2)
mystack2.push(1)
console.log(mystack2.stackData, mystack2.stackMin)
console.log(mystack2.pop(), mystack2.pop(), mystack2.pop(), mystack2.pop(), mystack2.pop(), mystack2.pop())

// 总结
// 共同点
// 方法一和方法二时间复杂度都是O(1)，空间复杂度都是O(n)
// 区别
// 方法一stackMin压入时稍省空间，但是弹出操作稍费时间
// 方法二stackMin压入时稍费空间，但是弹出操作稍省时间