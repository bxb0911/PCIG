// 宠物、狗和猫的类如下：
class Pet { 
  constructor(type) { 
    this.type = type
  }
  getPetType() { 
    return this.type
  }
}

class Dog extends Pet { 
  constructor() { 
    super('dog')
  }
}

class Cat extends Pet { 
  constructor() { 
    super('cat')
  }
}
// add方法将cat或dog实例放入队列中
// pollAll方法，将队列中所有的实例按照进队列的先后顺序一次弹出
// pollDog方法，将队列中dog类的实例按照进队列的先后顺序一次弹出
// pollCat方法，将队列中cat类的实例按照进队列的先后顺序一次弹出
// isEmpty方法，检查队列中是否还有dog或cat的实例
// isDogEmpty方法，检查队列中是否有dog类的实例
// isCatEmpty方法，检查队列中是否有cat类的实例
class PetEnterQueue { 
  constructor(pet, count) { 
    this.pet = pet
    this.count = count
  }
  getPet() { 
    return this.pet
  }
  getCount() { 
    return this.count
  }
  getEnterPerType() {
    return this.pet.getPetType()
  }
}
class DogCatQueue { 
  constructor() { 
    this.dogQ = []
    this.catQ = []
    this.count = 0
  }
  add(pet) { 
    if (pet.getPetType() === 'dog') {
      this.dogQ.push(new PetEnterQueue(pet, this.count++))
    } else if (pet.getPetType() === 'cat') {
      this.catQ.push(new PetEnterQueue(pet, this.count++))
    } else { 
      throw new Error('err, not dog or cat')
    }
  }
  pollAll() { 
    if (this.dogQ.length && this.catQ.length) {
      if (this.dogQ[this.dogQ.length - 1].getCount() < this.catQ[this.catQ.length - 1].getCount()) {
        return this.catQ.pop().getPet()
      } else {
        return this.dogQ.pop().getPet()
      }
    } else if (this.dogQ.length) {
      return this.dogQ.pop().getPet()
    } else if (this.catQ.length) {
      return this.catQ.pop().getPet()
    } else { 
      throw new Error('err, queue is empty!')
    }
  }
  pollDog() { 
    if (!this.isDogQueueEmpty()) {
      return this.dogQ.pop().getPet()
    } else { 
      throw new Error('Dog queue is empty!')
    }
  }
  pollCat() { 
    if (!this.isCatQueueEmpty()) {
      return this.catQ.pop().getPet()
    } else { 
      throw new Error('Cat queue is empty!')
    }
  }
  isEmpty() { 
    return this.dogQ.length === 0 && this.catQ.length === 0
  }
  isDogQueueEmpty() { 
    return this.dogQ.length === 0
  }
  isCatQueueEmpty() { 
    return this.catQ.length === 0
  }
}

const queue = new DogCatQueue()
queue.add(new Cat())
queue.add(new Dog())
queue.add(new Dog())
queue.add(new Cat())
console.log(queue.pollAll(), queue.pollAll(), queue.pollAll(), queue.pollAll())
queue.add(new Dog())
queue.add(new Dog())
queue.add(new Cat())
console.log(queue.pollCat(), queue.pollDog(), queue.isCatQueueEmpty(), queue.isDogQueueEmpty(), queue.isEmpty())