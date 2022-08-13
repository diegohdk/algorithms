import { range } from '../utils'
import { MergeSort } from './MergeSort'

describe('Merge sort', () => {
  it('should sort an array', () => {
    const array = range(10, true)
    MergeSort.create().sort(array)
    expect(array).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
