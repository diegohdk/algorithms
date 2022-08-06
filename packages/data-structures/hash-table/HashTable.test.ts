import { HashTable } from './HashTable'

describe('Hash table', () => {
  it('should add an item using string as key', () => {
    const hashTable = HashTable.create<string>()
    hashTable.set('foo', 'bar')
    expect(hashTable.getCount()).toStrictEqual(1)
    expect(hashTable.get('foo')).toStrictEqual('bar')
  })

  it('should add an item using number as key', () => {
    const hashTable = HashTable.create<string, number>()
    const key = 7
    hashTable.set(key, 'bar')
    expect(hashTable.getCount()).toStrictEqual(1)
    expect(hashTable.get(key)).toStrictEqual('bar')
  })

  it('should add an item using symbol as key', () => {
    const hashTable = HashTable.create<string, symbol>()
    const key = Symbol(10)
    hashTable.set(key, 'bar')
    expect(hashTable.getCount()).toStrictEqual(1)
    expect(hashTable.get(key)).toStrictEqual('bar')
  })

  it('should remove an item', () => {
    const hashTable = HashTable.create<string>()
    hashTable.set('foo', 'bar')
    const removedItem = hashTable.remove('foo')
    expect(hashTable.getCount()).toStrictEqual(0)
    expect(hashTable.get('foo')).toBeUndefined()
    expect(removedItem).toStrictEqual('bar')
  })

  it('should have an item', () => {
    const hashTable = HashTable.create<number>()
    hashTable.set('foo', 100)
    expect(hashTable.has('foo')).toBeTruthy()
  })

  it('should not have an invalid item', () => {
    const hashTable = HashTable.create<number>()
    hashTable.set('foo', 200)
    expect(hashTable.has('bar')).toBeFalsy()
  })

  it('should remove all items', () => {
    const hashTable = HashTable.create<number>()
    hashTable.set('foo', 200)
    hashTable.set('bar', 300)
    expect(hashTable.getCount()).toStrictEqual(2)
    hashTable.clear()
    expect(hashTable.getCount()).toStrictEqual(0)
  })
})
