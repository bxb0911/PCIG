// 有一个整型数组arr和一个大小为w的窗口从数组的最左边滑到最右边，窗口每次向右边滑一个位置
// 输入：整型数组arr，窗口大小为w
// 输出：一个长度为n-w+1的数组res，res[i]表示每一种窗口状态下的最大值
function getMaxWindow(arr, w) { 
  if (arr === null || w < 1 || arr.length < w) { 
    return null
  }
  debugger
  const qmax = []
  const res = new Array(arr.length - w + 1)
  let index = 0
  for (let i = 0; i < arr.length; i++) { 
    while (qmax.length !== 0 && arr[qmax[qmax.length - 1]] <= arr[i]) { 
      qmax.pop()
    }
    qmax.push(i)
    if (qmax[0] === i - w) { 
      qmax.shift()
    }
    if (i >= w - 1) { 
      res[index++] = arr[qmax[0]]
    }
  }
  return res
}

const res = getMaxWindow([4, 3, 5, 4, 3, 3, 6, 7], 3)
console.log(res)