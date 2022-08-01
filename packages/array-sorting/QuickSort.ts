import { IArraySort } from './IArraySort'

export class QuickSort implements IArraySort {
  static create() {
    return new this()
  }

  sort(array: number[], lowerIndex?: number, higherIndex?: number): number[] {
    if (lowerIndex === undefined) {
      lowerIndex = 0
    }

    if (higherIndex === undefined) {
      higherIndex = array.length - 1
    }

    if (lowerIndex < higherIndex) {
      const partitionIndex = this.partition(array, lowerIndex, higherIndex)
      this.sort(array, lowerIndex, partitionIndex - 1)
      this.sort(array, partitionIndex + 1, higherIndex)
    }

    return array
  }

  private partition(array: number[], lowerIndex: number, higherIndex: number) {
    const pivot = array[higherIndex]
    let smallestElementIndex = lowerIndex - 1

    for (let index = lowerIndex; index <= higherIndex - 1; index++) {
      if (array[index] < pivot) {
        smallestElementIndex++
        this.swap(array, smallestElementIndex, index)
      }
    }

    smallestElementIndex++
    this.swap(array, smallestElementIndex, higherIndex)
    return smallestElementIndex
  }

  private swap(array: number[], first: number, second: number) {
    // tip: could be done as follows, but it is slower
    // [array[first], array[second]] = [array[second], array[first]]
    const temp = array[first]
    array[first] = array[second]
    array[second] = temp
  }
}
