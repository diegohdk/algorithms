function findGCD(a: number, b: number) {
  let remainder = b
  let gcd = b

  while (remainder !== 0) {
    remainder = a % b
    gcd = b
    a = b
    b = remainder
  }

  return gcd
}

console.time("Euclid's find GCD")
console.timeLog("Euclid's find GCD", findGCD(60, 96))
console.timeLog("Euclid's find GCD", findGCD(20, 8))
