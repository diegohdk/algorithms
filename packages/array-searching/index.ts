import { random, range } from '../utils'
import { BinarySearch } from './BinarySearch'
import { LinearSearch } from './LinearSearch'

function test(size: number) {
  const middleValue = Math.ceil(size / 2)
  const firstHalfValue = random({ max: middleValue })
  const lastHalfValue = random({ min: middleValue, max: size - 1 })
  const array = range(size)
  const binarySearch = BinarySearch.create()
  const linearSearch = LinearSearch.create()
  const formatter = Intl.NumberFormat('pt-BR')
  let logLabel = size

  console.log('size', formatter.format(size))

  console.log('\nfirst half', formatter.format(firstHalfValue))

  console.time(`${logLabel}`)
  console.timeLog(
    `${logLabel}`,
    'binary search',
    binarySearch.search(firstHalfValue, array)
  )

  console.time(`${++logLabel}`)
  console.timeLog(
    `${logLabel}`,
    'linear search',
    linearSearch.search(firstHalfValue, array)
  )

  console.log('\nmiddle', formatter.format(middleValue))

  console.time(`${++logLabel}`)
  console.timeLog(
    `${logLabel}`,
    'binary search',
    binarySearch.search(middleValue, array)
  )

  console.time(`${++logLabel}`)
  console.timeLog(
    `${logLabel}`,
    'linear search',
    linearSearch.search(middleValue, array)
  )

  console.log('\nlast half', formatter.format(lastHalfValue))

  console.time(`${++logLabel}`)
  console.timeLog(
    `${logLabel}`,
    'binary search',
    binarySearch.search(lastHalfValue, array)
  )

  console.time(`${++logLabel}`)
  console.timeLog(
    `${logLabel}`,
    'linear search',
    linearSearch.search(lastHalfValue, array)
  )

  console.log('\n-----\n')
}

test(10)
test(100)
test(1000)
test(10000)
test(100000)
test(1000000)
test(10000000)
test(100000000)
