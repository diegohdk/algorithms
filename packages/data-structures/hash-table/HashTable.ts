type HashTableKey = string | number | symbol

export class HashTable<T, K extends HashTableKey> {
  private items: Record<K, T> = {} as Record<K, T>
  private count = 0

  public static create<T, K extends HashTableKey = string>(): HashTable<T, K> {
    return new this()
  }

  public set(key: K, value: T) {
    this.items[key] = value
    this.count++
  }

  public get(key: K) {
    return this.items[key]
  }

  public has(key: K) {
    return this.items[key] !== undefined
  }

  public remove(key: K) {
    if (!this.has(key)) {
      return
    }

    const item = this.items[key]
    delete this.items[key]
    this.count--
    return item
  }

  public getCount() {
    return this.count
  }

  public clear() {
    this.items = {} as typeof this.items
    this.count = 0
  }
}
