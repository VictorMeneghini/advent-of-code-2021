const fs = require('fs')

let lines = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
.split("\n")
.filter((x) => Boolean(x))
.map((x) => parseInt(x))


console.log(lines.length)

let counter = 0;

for (let i = 0; i < lines.length; i++) {
  const last = lines[i - 1]
  const current = lines[i]

  if(current > last) {
    counter++
  }
}

console.log(counter)
