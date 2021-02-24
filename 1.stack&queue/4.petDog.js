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