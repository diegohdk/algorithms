import { Queue } from './Queue'

describe('Queue', () => {
  it('should add and pop a value', () => {
    const queue = Queue.create<number>()
    queue.add(1)
    queue.add(2)
    queue.add(3)
    expect(queue.count()).toStrictEqual(3)
    expect(queue.pop()).toStrictEqual(1)
    expect(queue.pop()).toStrictEqual(2)
    expect(queue.pop()).toStrictEqual(3)
    expect(queue.count()).toStrictEqual(0)
  })

  it('should not pop when empty', () => {
    const queue = Queue.create<string>()
    expect(queue.pop()).toBeUndefined()
  })

  it('should not pop when empty', () => {
    const queue = Queue.create<string>()
    queue.add('a')
    queue.add('b')
    queue.add('c')
    expect(queue.count()).toStrictEqual(3)
    queue.clear()
    expect(queue.count()).toStrictEqual(0)
  })

  it.skip('should pop on a huge collection', () => {
    const queue = Queue.create<number>()
    let i = -1
    const limit = 10000000

    console.time('expensive queue add')
    while (++i < limit) {
      queue.add(i)
    }
    console.timeLog('expensive queue add', limit)

    expect(queue.count()).toStrictEqual(limit)

    console.time('expensive queue pop')
    const value = queue.pop()
    console.timeLog('expensive queue pop', limit)

    expect(value).toStrictEqual(0)
  })
})
