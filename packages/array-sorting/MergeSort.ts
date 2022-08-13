import { IArraySort } from './IArraySort'

export class MergeSort implements IArraySort {
  static create() {
    return new this()
  }

  sort(array: number[]): number[] {
    if (array.length <= 1) {
      return array
    }

    const middle = Math.ceil(array.length / 2)
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle)

    this.sort(leftArray)
    this.sort(rightArray)

    let leftIndex = 0
    let rightIndex = 0
    let finalIndex = -1

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        array[++finalIndex] = leftArray[leftIndex++]
      } else {
        array[++finalIndex] = rightArray[rightIndex++]
      }
    }

    while (leftIndex < leftArray.length) {
      array[++finalIndex] = leftArray[leftIndex++]
    }

    while (rightIndex < rightArray.length) {
      array[++finalIndex] = rightArray[rightIndex++]
    }

    return array
  }
}
