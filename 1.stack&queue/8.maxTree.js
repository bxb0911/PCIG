// MaxTree
// 数组必须没有重复元素
// MaxTree是一棵二叉树，数组的每一个值对应一个二叉树节点
// 包括MaxTree树在内且在其中的每一棵子树上，值最大的节点都是树的头
class Node { 
  constructor(data) { 
    this.value = data
    this.left = null
    this.right = null
  }
}


function getMaxTree(arr) { 
  const nArr = new Array(arr.length)
  for (let i = 0; i !== arr.length; i++) { 
    nArr[i] = new Node(arr[i])
  }
  const stack = []
  const lBigMap = new Map()
  const rBigMap = new Map()
  for (let i = 0; i !== nArr.length; i++) {
    let curNode = nArr[i]
    while (stack.length !== 0 && stack[stack.length - 1] < curNode.value) { 
      popStackSetMap(stack, lBigMap)
    }
    stack.push(curNode)
  }
  while (stack.length === 0) { 
    popStackSetMap(stack, lBigMap)
  }
  for (let i = nArr.length; i !== -1; i--) { 
    let curNode = nArr[i]
    while ((stack.length !== 0) && stack[stack.length - 1].value < curNode.value) { 
      popStackSetMap(stack, rBigMap)
    }
    stack.push(curNode)
  }
  while (stack.length !== 0) { 
    popStackSetMap(stack, rBigMap)
  }
  let head = null
  for (let i = 0; i !== nArr.length; i++) { 
    let curNode = nArr[i]
    let left = lBigMap.get(curNode)
    let right = rBigMap.get(curNode)
    if (left === null && right === null) {
      head = curNode
    } else if (left === null) {
      if (right.left === null) {
        right.left = curNode
      } else {
        right.right = curNode
      }
    } else if (right === null) {
      if (left.left === null) {
        left.left = curNode
      } else {
        left.right = curNode
      }
    } else { 
      let parent = left.value < right.value ? left : right
      if (parent.left === null) {
        parent.left = curNode
      } else { 
        parent.right = curNode
      }
    }
  }
  return head
}

function popStackSetMap(stack, map) { 
  let popNode = stack.pop()
  if (stack.length === 0) {
    map.set(popNode, null)
  } else { 
    map.set(popNode, stack[stack.length - 1])
  }
}