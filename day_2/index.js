const fs = require('fs')

const inputValues = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
.split('\n')
.filter(x => Boolean(x))
.map(x => x)

let depth = 0
let horizontalValue = 0
let result = 0

const applyAction = (action) => {
  const availableActions = {
    forward: (value) => { horizontalValue += value},
    down: (value) => { depth += value},
    up: (value) => { depth -= value}
  }

  const [ moveType, value ] = action.split(' ')

  availableActions[moveType](+value)
}

inputValues.forEach((action) => {
  applyAction(action)
})

result = depth * horizontalValue

console.log(result)