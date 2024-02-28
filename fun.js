console.log("Hello")
// console.log(document)
// console.log(window)

// console.log(global)

// console.log(process.argv[2])

const [, , num] = process.argv
const double = (num) => num * 2
// console.log(double(num))


const [, , n1, n2] = process.argv

const sum = (n1, n2) => n1 + n2
console.log(sum(+n1, +n2))