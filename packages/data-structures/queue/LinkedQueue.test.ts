import { LinkedQueue } from './LinkedQueue'

describe('Linked queue', () => {
  it('should add and pop a value', () => {
    const linkedQueue = LinkedQueue.create<number>()
    linkedQueue.add(1)
    linkedQueue.add(2)
    linkedQueue.add(3)
    expect(linkedQueue.count()).toStrictEqual(3)
    expect(linkedQueue.pop()).toStrictEqual(1)
    expect(linkedQueue.pop()).toStrictEqual(2)
    expect(linkedQueue.pop()).toStrictEqual(3)
    expect(linkedQueue.count()).toStrictEqual(0)
  })

  it('should not pop when empty', () => {
    const linkedQueue = LinkedQueue.create<string>()
    expect(linkedQueue.pop()).toBeUndefined()
  })

  it('should not pop when empty', () => {
    const linkedQueue = LinkedQueue.create<string>()
    linkedQueue.add('a')
    linkedQueue.add('b')
    linkedQueue.add('c')
    expect(linkedQueue.count()).toStrictEqual(3)
    linkedQueue.clear()
    expect(linkedQueue.count()).toStrictEqual(0)
  })

  it.skip('should pop on a huge collection', () => {
    const linkedQueue = LinkedQueue.create<number>()
    let i = -1
    const limit = 10000000

    console.time('expensive linked queue add')
    while (++i < limit) {
      linkedQueue.add(i)
    }
    console.timeLog('expensive linked queue add', limit)

    expect(linkedQueue.count()).toStrictEqual(limit)

    console.time('expensive linked queue pop')
    const value = linkedQueue.pop()
    console.timeLog('expensive linked queue pop', limit)

    expect(value).toStrictEqual(0)
  })
})
