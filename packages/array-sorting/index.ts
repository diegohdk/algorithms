import { range } from '../utils'
import { QuickSort } from './QuickSort'

const size = 10000000

const array1 = range(size, true)
console.time('array.sort')
console.timeLog(
  'array.sort',
  array1.sort((a, b) => a - b)
)

const array2 = range(size, true)
console.time('quick sort')
console.timeLog('quick sort', QuickSort.create().sort(array2))

// takes way too long...
// const array3 = range(size, true)
// console.time('bubble sort')
// console.timeLog('bubble sort', BubbleSort.create().sort(array3))
