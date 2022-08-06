export interface ICollection<T> {
  add(value: T): void
  pop(): T | undefined
  count(): number
  clear(): void
}
