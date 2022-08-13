import { range } from '../utils'
import { BinarySearch } from './BinarySearch'

describe('Bubble sort', () => {
  it('should find valid values', () => {
    const array = range(10)
    const searcher = BinarySearch.create()
    expect(searcher.search(1, array)).toStrictEqual(0)
    expect(searcher.search(2, array)).toStrictEqual(1)
    expect(searcher.search(3, array)).toStrictEqual(2)
    expect(searcher.search(4, array)).toStrictEqual(3)
    expect(searcher.search(5, array)).toStrictEqual(4)
    expect(searcher.search(6, array)).toStrictEqual(5)
    expect(searcher.search(7, array)).toStrictEqual(6)
    expect(searcher.search(8, array)).toStrictEqual(7)
    expect(searcher.search(9, array)).toStrictEqual(8)
    expect(searcher.search(10, array)).toStrictEqual(9)
    expect(searcher.search(11, array)).toStrictEqual(-1)
    expect(searcher.search(0, array)).toStrictEqual(-1)
    expect(searcher.search(-1, array)).toStrictEqual(-1)
  })

  it('should not find invalid values', () => {
    const array = range(10)
    const searcher = BinarySearch.create()
    expect(searcher.search(-1, array)).toStrictEqual(-1)
    expect(searcher.search(0, array)).toStrictEqual(-1)
    expect(searcher.search(11, array)).toStrictEqual(-1)
  })
})
