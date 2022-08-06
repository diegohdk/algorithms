import { SinglyLinkedList } from './SinglyLinkedList'

function createLinkedList() {
  const list = SinglyLinkedList.create<number>()
  list.add(10)
  list.add(51)
  list.add(321)
  list.add(2)
  list.add(54)
  list.add(954)
  return list
}

describe('Singly linked list', () => {
  describe('Add', () => {
    it('should add nodes', () => {
      expect(createLinkedList().toString()).toStrictEqual(
        `Node: 10
Node: 51
Node: 321
Node: 2
Node: 54
Node: 954
`
      )
    })
    it('should add only one node', () => {
      const list = SinglyLinkedList.create<number>()
      list.add(100)
      expect(list.find(100)?.getValue()).toStrictEqual(100)
      expect(list.getHead()?.getValue()).toStrictEqual(100)
      expect(list.getTail()?.getValue()).toStrictEqual(100)
      expect(list.getCount()).toStrictEqual(1)
    })

    it('should point head and tail to the correct nodes', () => {
      const list = createLinkedList()
      expect(list.getHead()?.getValue()).toStrictEqual(10)
      expect(list.getTail()?.getValue()).toStrictEqual(954)
    })
  })

  describe('Find', () => {
    it('should be empty', () => {
      const list = SinglyLinkedList.create<number>()
      expect(list.find(574)).toBeUndefined()
      expect(list.getHead()).toBeUndefined()
      expect(list.getTail()).toBeUndefined()
      expect(list.getCount()).toStrictEqual(0)
    })

    it('should find valid nodes', () => {
      const list = createLinkedList()
      expect(list.find(51)?.getValue()).toStrictEqual(51)
      expect(list.find(10)?.getValue()).toStrictEqual(10)
      expect(list.find(954)?.getValue()).toStrictEqual(954)
    })

    it('should not find invalid node', () => {
      const list = createLinkedList()
      expect(list.find(1)).toBeUndefined()
    })
  })

  describe('Remove', () => {
    it('should remove one node', () => {
      const list = createLinkedList()
      const removedNode = list.remove(2)
      expect(list.find(2)).toBeUndefined()
      expect(removedNode?.getNext()).toBeUndefined()
    })

    it('should remove a couple nodes', () => {
      const list = createLinkedList()
      list.remove(2)
      list.remove(10)
      list.remove(954)
      expect(list.find(2)).toBeUndefined()
      expect(list.find(10)).toBeUndefined()
      expect(list.find(954)).toBeUndefined()
      expect(list.getCount()).toStrictEqual(3)
    })

    it('should not remove an invalid node', () => {
      const list = createLinkedList()
      list.remove(1)
      expect(list.getCount()).toStrictEqual(6)
    })

    it('should remove all nodes', () => {
      const list = createLinkedList()
      list.remove(2)
      list.remove(10)
      list.remove(954)
      list.remove(51)
      list.remove(321)
      list.remove(54)
      expect(list.getHead()).toBeUndefined()
      expect(list.getTail()).toBeUndefined()
      expect(list.getCount()).toStrictEqual(0)
    })

    it('should remove and leave a single node', () => {
      const list = createLinkedList()
      list.remove(2)
      list.remove(10)
      list.remove(954)
      list.remove(51)
      list.remove(54)
      expect(list.getHead()?.getValue()).toStrictEqual(321)
      expect(list.getTail()).toStrictEqual(list.getHead())
      expect(list.getCount()).toStrictEqual(1)
    })

    it('count should not be less than zero', () => {
      const list = SinglyLinkedList.create<number>()
      list.add(1)
      list.remove(1)
      list.remove(1)
      list.remove(2)
      expect(list.getHead()).toBeUndefined()
      expect(list.getTail()).toBeUndefined()
      expect(list.getCount()).toStrictEqual(0)
    })
  })

  describe('Get at', () => {
    it('should get at a valid index', () => {
      const list = createLinkedList()
      expect(list.at(0)?.getValue()).toStrictEqual(10)
      expect(list.at(1)?.getValue()).toStrictEqual(51)
      expect(list.at(2)?.getValue()).toStrictEqual(321)
      expect(list.at(3)?.getValue()).toStrictEqual(2)
      expect(list.at(4)?.getValue()).toStrictEqual(54)
      expect(list.at(5)?.getValue()).toStrictEqual(954)
    })

    it('should not get at an invalid index', () => {
      const list = createLinkedList()
      expect(list.at(-1)).toBeUndefined()
      expect(list.at(7)).toBeUndefined()
    })
  })

  describe('Insert', () => {
    it('should insert at head', () => {
      const list = createLinkedList()
      const previous = list.getHead()?.getValue()
      list.insert(77, 0)
      expect(list.getCount()).toStrictEqual(7)
      expect(list.at(0)?.getValue()).toStrictEqual(77)
      expect(list.getHead()?.getValue()).toStrictEqual(77)
      expect(list.getHead()?.getNext()?.getValue()).toStrictEqual(previous)
    })

    it('should insert at tail', () => {
      const list = createLinkedList()
      const previous = list.getTail()?.getValue()
      list.insert(77, 5)
      expect(list.getCount()).toStrictEqual(7)
      expect(list.at(5)?.getValue()).toStrictEqual(77)
      expect(list.at(5)?.getNext()?.getValue()).toStrictEqual(previous)
      expect(list.getTail()?.getValue()).toStrictEqual(previous)
    })

    it('should insert at other index', () => {
      const list = createLinkedList()
      const previous = list.at(2)?.getValue()
      list.insert(33, 2)
      expect(list.getCount()).toStrictEqual(7)
      expect(list.at(2)?.getValue()).toStrictEqual(33)
      expect(list.at(2)?.getNext()?.getValue()).toStrictEqual(previous)
    })

    it('should insert at empty list', () => {
      const list = SinglyLinkedList.create<number>()
      list.insert(123, 2)
      expect(list.getCount()).toStrictEqual(1)
      expect(list.at(0)?.getValue()).toStrictEqual(123)
      expect(list.getHead()?.getValue()).toStrictEqual(123)
      expect(list.getTail()?.getValue()).toStrictEqual(123)
    })

    it('should not insert at invalid index', () => {
      const list = createLinkedList()
      list.insert(123, -1)
      expect(list.getCount()).toStrictEqual(6)
      list.insert(123, 7)
      expect(list.getCount()).toStrictEqual(6)
    })
  })

  describe('Remove at', () => {
    it('should remove at head', () => {
      const list = createLinkedList()
      const removedNode = list.removeAt(0)
      expect(list.getCount()).toStrictEqual(5)
      expect(list.at(0)?.getValue()).toStrictEqual(51)
      expect(list.getHead()?.getValue()).toStrictEqual(51)
      expect(removedNode?.getValue()).toStrictEqual(10)
      expect(removedNode?.getNext()).toBeUndefined()
    })

    it('should remove at tail', () => {
      const list = createLinkedList()
      const removedNode = list.removeAt(5)
      expect(list.getCount()).toStrictEqual(5)
      expect(list.at(4)?.getValue()).toStrictEqual(54)
      expect(list.getTail()?.getValue()).toStrictEqual(54)
      expect(removedNode?.getValue()).toStrictEqual(954)
      expect(removedNode?.getNext()).toBeUndefined()
    })

    it('should remove at other index', () => {
      const list = createLinkedList()
      const removedNode = list.removeAt(3)
      expect(list.getCount()).toStrictEqual(5)
      expect(list.at(3)?.getValue()).toStrictEqual(54)
      expect(removedNode?.getValue()).toStrictEqual(2)
      expect(removedNode?.getNext()).toBeUndefined()
    })

    it('should not remove at invalid index', () => {
      const list = createLinkedList()
      list.removeAt(-1)
      expect(list.getCount()).toStrictEqual(6)
      list.removeAt(7)
      expect(list.getCount()).toStrictEqual(6)
    })
  })
})
