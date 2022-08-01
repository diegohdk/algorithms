import { range } from '../utils'

function countTotalReduce(numbers: number[]) {
  return numbers.reduce((sum, value) => sum + value, 0)
}

function countTotalForOf(numbers: number[]) {
  let sum = 0

  for (const number of numbers) {
    sum += number
  }

  return sum
}

function countTotalFor(numbers: number[]) {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  return sum
}

function countTotalWhile(numbers: number[]) {
  let sum = 0
  let i = -1
  const limit = numbers.length

  while (++i < limit) {
    sum += numbers[i]
  }

  return sum
}

function countTotalModel(n: number) {
  const sum = (n * (n + 1)) / 2
  return sum
}

const limit = 100000000

console.time('sum')
const numbersList = range(limit)
console.timeLog('sum', 'Sum to', limit)

console.time('reduce')
console.timeLog('reduce', countTotalReduce(numbersList))

console.time('for of')
console.timeLog('for of', countTotalForOf(numbersList))

console.time('for')
console.timeLog('for', countTotalFor(numbersList))

console.time('while')
console.timeLog('while', countTotalWhile(numbersList))

console.time('model')
console.log('model', countTotalModel(limit))
