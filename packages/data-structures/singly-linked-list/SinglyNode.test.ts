import { SinglyNode } from './SinglyNode'

describe('Singly node', () => {
  it('should create a node', () => {
    const node = SinglyNode.create(1)
    expect(node).toBeInstanceOf(SinglyNode)
    expect(node.getValue()).toStrictEqual(1)
    expect(node.getNext()).toBeUndefined()
  })

  it('should set next', () => {
    const node1 = SinglyNode.create('abc')
    const node2 = SinglyNode.create('def')
    node1.setNext(node2)
    expect(node1.getNext()).toStrictEqual(node2)
  })

  it('should be equal passing instance', () => {
    const node = SinglyNode.create({ foo: 'bar' })
    expect(node.equals(node)).toBeTruthy()
  })

  it('should be equal passing value', () => {
    const node = SinglyNode.create({ foo: 'bar' })
    expect(node.equals(node.getValue())).toBeTruthy()
  })

  it('should be different', () => {
    const node1 = SinglyNode.create({ foo: 'bar' })
    const node2 = SinglyNode.create({ bar: 'foo' })
    expect(node1.equals(node2)).toBeFalsy()
  })
})
