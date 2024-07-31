// Funciones

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parámetros

function myFuncWithParams(name) {
    console.log(`Hola, ${name}!`)
}

myFuncWithParams("Brais")

// Funciones anónimas

const myFunc2 = function (name) {
    console.log(`Hola, ${name}!`)
}
myFunc2("Brais Moure")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}!`)
    
myFunc3("Luisma Gallego")

myFunc4("Luisma Gallego")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

mult(5, 10)

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior -- Reciben otras funciones como argumentos

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "funcion de orden superior")

// forEach

myArray = [1, 2, 3, 4]

myArray.forEach((value) => console.log(value))
    

