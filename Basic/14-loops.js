// Loops o bucles - Permite repetir un bloque de código

// for  - Evalua una condición, si es true se ejecuta y si es false sale de bucle

for (let i = 0; i < 5; i++)  {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++)  {
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito
// while(true) {

// }

// do while

i = 0
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)


// for of - Recorrer algo que sea iterable (estructura de datas, algún tipo de datos)

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

// break y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}

