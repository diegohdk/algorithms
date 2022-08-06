import { SinglyNode } from './SinglyNode'

export class SinglyLinkedList<T> {
  private head?: SinglyNode<T>
  private tail?: SinglyNode<T>
  private count = 0

  public static create<T>(): SinglyLinkedList<T> {
    return new this()
  }

  public add(value: T) {
    const newNode = SinglyNode.create(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail?.setNext(newNode)
      this.tail = newNode
    }

    this.count++
    return newNode
  }

  public insert(value: T, index: number) {
    if (this.count === 0) {
      return this.add(value)
    }

    if (index >= this.count || index < 0) {
      return
    }

    const newNode = SinglyNode.create(value)

    if (index === 0) {
      newNode.setNext(this.head)
      this.head = newNode
      this.count++
      return newNode
    }

    const sibling = this.at(index - 1)
    newNode.setNext(sibling?.getNext())
    sibling?.setNext(newNode)
    this.count++
    return newNode
  }

  public at(index: number): SinglyNode<T> | undefined {
    if (index >= this.count || index < 0) {
      return
    }

    let node = this.head
    let currentIndex = -1

    while (++currentIndex < this.count) {
      if (currentIndex === index) {
        return node
      }

      node = node?.getNext()
    }
  }

  public find(value: T): SinglyNode<T> | undefined {
    let node = this.head

    while (node) {
      if (node.equals(value)) {
        return node
      }

      node = node.getNext()
    }
  }

  public remove(value: T) {
    let node = this.head

    if (node?.equals(value)) {
      this.head = node.getNext()
      node.setNext(undefined)
      this.count--

      if (this.count === 0) {
        this.head = undefined
        this.tail = undefined
      } else if (this.count === 1) {
        this.tail = this.head
      }

      return node
    }

    while (node) {
      if (node.getNext()?.equals(value)) {
        break
      }

      node = node.getNext()
    }

    if (!node) {
      return
    }

    const removedNode = node.getNext()
    node.setNext(removedNode?.getNext())
    removedNode?.setNext(undefined)
    this.count--

    if (this.count === 0) {
      this.head = undefined
      this.tail = undefined
    } else {
      if (this.head?.equals(removedNode)) {
        this.head = node
      }

      if (this.tail?.equals(removedNode)) {
        this.tail = node.getNext() || node
      }
    }

    return removedNode
  }

  public removeAt(index: number) {
    if (index === 0) {
      const removedNode = this.head
      this.head = removedNode?.getNext()
      removedNode?.setNext(undefined)
      this.count--
      return removedNode
    }

    const sibling = this.at(index - 1)

    if (!sibling) {
      return
    }

    const removedNode = sibling?.getNext()
    sibling.setNext(removedNode?.getNext())
    removedNode?.setNext(undefined)
    this.count--

    if (this.tail?.equals(removedNode)) {
      this.tail = sibling
    }

    return removedNode
  }

  public getHead() {
    return this.head
  }

  public getTail() {
    return this.tail
  }

  public getCount() {
    return this.count
  }

  public toString() {
    let str = ''
    let node = this.head

    while (node) {
      str += `Node: ${node.getValue()}\n`
      node = node.getNext()
    }

    return str
  }
}
