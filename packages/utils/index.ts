export function range(size: number, random = false) {
  const array = new Array(size)
  let i = -1

  while (++i < size) {
    array[i] = i + 1
  }

  if (random) {
    array.sort(() => 1 - Math.random() * 2)
  }

  return array
}

export function makeRandomArray(size: number, args?: RandomArgs) {
  const array = new Array(size)
  let i = -1

  while (++i < size) {
    array[i] = random(args)
  }

  return array
}

type RandomArgs = {
  min?: number
  max?: number
}

export function random(args?: RandomArgs) {
  const min = args?.min ?? 0
  const max = args?.max ?? Number.MAX_SAFE_INTEGER
  return Math.floor(Math.random() * max) + min
}
