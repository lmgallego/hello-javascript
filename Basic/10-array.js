// array (listas en otros lenguajes)

// Declaración

let myArray = [] // REcomendable usar esta
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Brais"
myArray2[1] = "Moure"
myArray2[2] = "mouredev"

console.log(myArray2)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("moredev")
myArray.push(37)

console.log(myArray.pop()) // Elimina el último y lo devuelve

myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // Alternativa
console.log(myArray)

// slice

myArray.push("Brais", "Moure", " mouredev", 37, true)
let myNewArray = myArray.slice(1,3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", " mouredev", 37, true]
myArray.splice(1, 2, "Nueva Entrada")
console.log(myArray)

