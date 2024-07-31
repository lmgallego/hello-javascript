/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Luisma"
if (nombre == "Luisma") {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "luisma"
let pass = 1234
if (usuario == "luisma" && pass == 1234) {
    console.log("Acceso autorizado")
} else {
    console.log("Acceso no autorizado")
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 12

if (num < 0) {
    console.log("El número es negativo")
} else if (num == 0) {
    console.log("El número es cero")  
} else {
    console.log("El número es positivo")
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 18
let mayorEdad = 18
let añosFaltantes = mayorEdad - edad

if (edad < 18) {
    console.log("No puedes votar te faltan " + añosFaltantes + " años")
} else if (edad >= 18) {
    console.log("Puedes votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let anios = 16
let mensaje = anios >= 18 ? "Adulto" : "Menor"
console.log(mensaje)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Octubre"

if (mes == "Enero" || mes == "Febrero" || mes == "Marzo") {
    console.log("Es invierno")
} else if (mes == "Abril" || mes == "Mayo" || mes == "Junio") {
    console.log("Es primavera")
} else if (mes == "Julio" || mes == "Agosto" || mes == "Septiembre") {
    console.log("Es verano")
} else {
    console.log("Es otoño")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7