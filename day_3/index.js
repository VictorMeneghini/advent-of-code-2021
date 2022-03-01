const fs = require('fs')

console.clear()

const inputValues = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
.split('\n')
.filter(x => Boolean(x))
.map(x => x)

const getMostFrequent = (arr) => {
  const hashmap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})

  return Object.keys(hashmap).reduce((a,b) => hashmap[a] > hashmap[b] ? a : b)
}

const getLeastFrequent = (arr) => {
  const hashmap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})

  return Object.keys(hashmap).reduce((a,b) => hashmap[a] < hashmap[b] ? a : b)
}

let matrix = Array(inputValues[0].length).fill(null).map(() => Array(inputValues.length).fill(0));

for (let i = 0; i < inputValues[0].length; i++) {
  for (let y = 0; y < inputValues.length; y++) {
    matrix[i][y] = inputValues[y][i]
  }
}

let gammaRate = matrix.map(arr => getMostFrequent(arr)).join('')
let epsilonRate = matrix.map(arr => getLeastFrequent(arr)).join('')

const result = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)

console.log(result)