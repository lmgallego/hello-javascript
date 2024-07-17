// Tipos de datos primitivos

// Cadenas de texto (string)
let name = "Luisma Gallego"
let alias = 'Luisma'
let email = `luisma.gallego@gmail.com`

// Números (number)
let age = 48 // Entero
let height = 1.75 // Decimal

// Booleanos (boolean)
let isStudent = false
let isTeacher = true

// Undefined
let undefinedValue // Variable que no tiene valor asociado por lo que lo interpreta como undefined
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol
let mySymbol = Symbol("mysymbol") // Valores únicos 

// BigInt
let myBigInt = BigInt(87776769789008797688790809089090789786876687)
let myBigInt2 = 45654367447345345654645756334545363245345346n

// Mostramos los tipos de datos
console.log(typeof name)
console.log(typeof undefinedValue)
console.log(isStudent)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
