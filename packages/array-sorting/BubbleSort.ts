import { IArraySort } from './IArraySort'

export class BubbleSort implements IArraySort {
  static create() {
    return new this()
  }

  sort(array: number[]): number[] {
    let size = array.length

    while (--size > 0) {
      let index = -1

      while (index++ < size) {
        if (array[index] > array[index + 1]) {
          const temp = array[index]
          array[index] = array[index + 1]
          array[index + 1] = temp
        }
      }
    }

    return array
  }
}
