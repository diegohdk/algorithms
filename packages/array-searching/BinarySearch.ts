import { IArraySearch } from './IArraySearch'

export class BinarySearch implements IArraySearch {
  public static create() {
    return new this()
  }

  search(value: number, array: number[]): number {
    let lower = 0
    let upper = array.length - 1
    let middle = this.middle(lower, upper)

    if (value < array[lower] || value > array[upper]) {
      return -1
    }

    while (upper - lower >= 0) {
      if (array[middle] === value) {
        return middle
      }

      if (value < array[middle]) {
        upper = middle - 1
      } else {
        lower = middle + 1
      }

      middle = this.middle(lower, upper)
    }

    return -1
  }

  private middle(lower: number, upper: number) {
    return lower + Math.ceil((upper - lower) / 2)
  }
}
