// 一个栈中元素的类型为整型，现在想将该栈从顶到底按从大到小的顺序排序，只许申请一个栈
// 除此之外，可以申请新的变量，但不能申请额外的数据结构，如何完成排序？
function sortStackByStack(stack) { 
  let help = []
  while (stack.length) { 
    let cur = stack.pop()
    while (help.length && help[help.length - 1] > cur) { 
      stack.push(help.pop())
    }
    help.push(cur)
  }
  while (help.length) { 
    stack.push(help.pop())
  }
  console.log(stack)
}

sortStackByStack([3, 5, 1, 2])

