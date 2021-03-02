// 汉诺塔问题
// 限制不能从最左侧的塔直接移动到最右侧，也不能从最右侧直接移动到最左侧，而是必须经过中间
// 求当塔有N层的时候，打印最优移动过程和最优移动总步数

// 方法一：递归的方法
function haniProblem1(num, left, mid, right) { 
  if (num < 1) { 
    return 0
  }
  return process(num, left, mid, right, left, right)
}

function process(num, left, mid, right, from, to) { 
  if (num === 1) { 
    if (from === mid || to === mid) {
      console.log('Move 1 from ', from, ' to ', to)
      return 1
    } else { 
      console.log('Move 1 from ', from, ' to ', mid)
      console.log('Move 1 from ', mid, ' to ', to)
      return 2
    }
  }
  if (from === mid || to === mid) {
    let another = (from === left || to === left) ? right : left
    const part1 = process(num - 1, left, mid, right, from, another)
    const part2 = 1
    console.log('Move ', num, ' from ', from, ' to ', to)
    const part3 = process(num - 1, left, mid, right, another, to)
    return part1 + part2 + part3
  } else { 
    const part1 = process(num - 1, left, mid, right, from, to)
    const part2 = 1
    console.log('Move ', num, ' from ', from, ' to ', mid)
    const part3 = process(num - 1, left, mid, right, to, from)
    const part4 = 1
    console.log('Move ', num, ' from ', mid, ' to ', to)
    const part5 = process(num - 1, left, mid, right, from, to)
    return part1 + part2 + part3 + part4 + part5
  }
}

// 方法二：非递归的方法，用栈来模拟汉诺塔的三个塔
const Action = {
  No: () => { },
  LToM: () => { },
  MToL: () => { },
  MToR: () => { },
  RToM: () => { }
}

function hanoiProblem2(num, left, mid, right) { 
  const lS = []
  const mS = []
  const rS = []
  for (let i = num; i > 0; i--) { 
    lS.push(i)
  }
  const record = [Action.No]
  let step = 0
  while (rS.length !== num + 1) { 
    step += fStackTotStack(record, Action.MToL, Action.LToM, lS, mS, left, mid)
    step += fStackTotStack(record, Action.LToM, Action.MToL, mS, lS, mid, left)
    step += fStackTotStack(record, Action.RToM, Action.MToR, mS, rS, mid, right)
    step += fStackTotStack(record, Action.MToR, Action.RToM, rS, mS, right, mid)
  }
  return step
}

function fStackTotStack(record, preNoAct, nowAct, fStack, tStack, from, to) { 
  if (record[0] !== preNoAct && fStack[fStack.length - 1] < tStack[tStack.length - 1]) { 
    tStack.push(fStack.pop())
    console.log('Move ', tStack[tStack.length - 1], ' from ', from, ' to ', to)
    record[0] = nowAct
    return 1
  }
  return 0
}


