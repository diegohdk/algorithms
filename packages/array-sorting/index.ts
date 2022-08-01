import { range } from '../utils'
import { QuickSort } from './QuickSort'

const size = 10000000
const array1 = range(size, true)
console.time('quick sort')
console.timeLog('quick sort', QuickSort.create().sort(array1))

const array2 = range(size, true)
console.time('array.sort')
console.timeLog(
  'array.sort',
  array2.sort((a, b) => a - b)
)
