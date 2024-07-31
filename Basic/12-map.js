myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get

console.log(myMap.get("name"))

// has

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")
console.log(myMap)

// keys, values, sizes

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear(myMap)
console.log(myMap)

