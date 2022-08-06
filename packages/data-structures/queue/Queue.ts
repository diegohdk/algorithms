import { ICollection } from '../ICollection'

export class Queue<T> implements ICollection<T> {
  private items: T[] = []

  public static create<T>(): Queue<T> {
    return new this()
  }

  public add(value: T) {
    this.items.push(value)
  }

  public pop() {
    return this.items.shift()
  }

  public count() {
    return this.items.length
  }

  public clear() {
    this.items = []
  }
}
