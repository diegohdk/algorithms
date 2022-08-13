import { IArraySearch } from './IArraySearch'

export class LinearSearch implements IArraySearch {
  public static create() {
    return new this()
  }

  search(value: number, array: number[]): number {
    const size = array.length - 1
    let index = 0

    if (value < array[index] || value > array[size]) {
      return -1
    }

    while (index <= size) {
      if (array[index] === value) {
        return index
      }

      index++
    }

    return -1
  }
}
