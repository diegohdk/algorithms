import { ICollection } from '../ICollection'

export class Stack<T> implements ICollection<T> {
  private items: T[] = []

  public static create<T>(): Stack<T> {
    return new this()
  }

  public add(value: T) {
    this.items.push(value)
  }

  public pop() {
    return this.items.pop()
  }

  public count() {
    return this.items.length
  }

  public clear() {
    this.items = []
  }
}
