import { ICollection } from '../ICollection'
import { SinglyLinkedList } from '../singly-linked-list/SinglyLinkedList'

export class LinkedQueue<T> implements ICollection<T> {
  private list: SinglyLinkedList<T>

  public constructor() {
    this.list = SinglyLinkedList.create()
  }

  public static create<T>(): LinkedQueue<T> {
    return new this()
  }

  public add(value: T) {
    this.list.add(value)
  }

  public pop() {
    return this.list.removeAt(0)?.getValue()
  }

  public count() {
    return this.list.getCount()
  }

  public clear() {
    while (this.list.getHead()) {
      this.list.removeAt(0)
    }
  }
}
