export class SinglyNode<T> {
  public constructor(private value: T, private next?: SinglyNode<T>) {}

  public static create<T>(value: T): SinglyNode<T> {
    return new this(value)
  }

  public getValue(): T {
    return this.value
  }

  public setNext(nextNode?: SinglyNode<T>) {
    this.next = nextNode
  }

  public getNext(): SinglyNode<T> | undefined {
    return this.next
  }

  public equals(value: SinglyNode<T> | unknown) {
    return Object.is(
      this.value,
      value instanceof SinglyNode<T> ? value.getValue() : value
    )
  }
}
