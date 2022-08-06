import { Stack } from './Stack'

describe('Stack', () => {
  it('should add and pop a value', () => {
    const stack = Stack.create<number>()
    stack.add(1)
    stack.add(2)
    stack.add(3)
    expect(stack.count()).toStrictEqual(3)
    expect(stack.pop()).toStrictEqual(3)
    expect(stack.pop()).toStrictEqual(2)
    expect(stack.pop()).toStrictEqual(1)
    expect(stack.count()).toStrictEqual(0)
  })

  it('should not pop when empty', () => {
    const stack = Stack.create<string>()
    expect(stack.pop()).toBeUndefined()
  })

  it('should not pop when empty', () => {
    const stack = Stack.create<string>()
    stack.add('a')
    stack.add('b')
    stack.add('c')
    expect(stack.count()).toStrictEqual(3)
    stack.clear()
    expect(stack.count()).toStrictEqual(0)
  })

  it.skip('should pop on a huge collection', () => {
    const stack = Stack.create<number>()
    let i = -1
    const limit = 10000000

    console.time('expensive stack add')
    while (++i < limit) {
      stack.add(i)
    }
    console.timeLog('expensive stack add', limit)

    expect(stack.count()).toStrictEqual(limit)

    console.time('expensive stack pop')
    const value = stack.pop()
    console.timeLog('expensive stack pop', limit)

    expect(value).toStrictEqual(limit - 1)
  })
})
