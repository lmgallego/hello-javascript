// Strings

// Concatenación de cadenas
let myName = "Luisma"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[14])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Luisma"))
console.log(greeting.includes("Luisma"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Luisma", "LuisManuel"))

// Template literals (plantillas literales)

let message = `Hola, este es mi
curso de Javascript`
console.log(message)

console.log(`Hola, ${myName}!`)

