


/*Temas: Variables, Operadores, Estructuras de Control, prompt, parseInt, switch-case
/*

// -----------------------------------------------------------

Ejercicio 1 – Calculadora de Promedio y Rendimiento



// let nota1 = Number(prompt("Ingresa la nota 1:"))
// let nota2 = Number(prompt("Ingresa la nota 2:"))
// let nota3 = Number(prompt("Ingresa la nota 3:"))
// let nota4 = Number(prompt("Ingresa la nota 4:"))

// let promedio = ((nota1+nota2+nota3+nota4)/4)

// if (promedio>= 90){
//     alert ("Tu promedio es " + promedio + ": Excelente")
// }else if (promedio>= 75 && promedio < 90){
//     alert ("Tu promedio es " + promedio + ": Bueno")
// }else if (promedio>= 60 && promedio < 75){
//     alert ("Tu promedio es " + promedio + ": Regular")
// }else alert ("insuficiente")

// -----------------------------------------------------------

/*Ejercicio 2 – Calculadora de Tarifa de Transporte
El programa debe pedir al usuario:
/*

let edad = Number(prompt("Ingresa tu edad:"))
let estudiante = (prompt("Eres estudiante Si/No:")).toLowerCase()
let distancia = Number(prompt("Ingresa la distancia en km:"))

let precioBase = (100)
let costoFinal = precioBase;

if (edad < 18){
    costoFinal = precioBase * 0.5
    } else if (estudiante === "si"){
    costoFinal = precioBase * 0.75
    } else if (edad >= 60){
    costoFinal = precioBase * 0.4
    }
if (distancia > 30){
    costoFinal = costoFinal * 1.1
}

costoFinal = parseInt(costoFinal);

alert (`El costo de tu viaje es ${costoFinal}`) */

// -----------------------------------------------------------

/*Ejercicio 3 – Menú de Conversión de Unidades
Muestra un menú con 4 opciones:
*/

/*
let opcionAConvertir = prompt(`ESCOJA UNA OPCION 1,2,3 ó 4 :

- Convertir de Celsius a Fahrenheit : 1

- Convertir de Fahrenheit a Celsius : 2

- Convertir de Metros a Kilómetros : 3

- Convertir de Kilómetros a Metros : 4 `)

switch (opcionAConvertir) {
    case "1": {
        
            let celsius = Number(prompt("Escriba los grados Celsius :"))
            let fahrenheit = (celsius * 1.8) + 32 
            alert(`${celsius}°C equivalen a ${parseInt(fahrenheit)}°F`)
        }
        break; 

    case "2":{
            let fahre = Number(prompt("Escriba los grados Fahrenheit :"))
            let cel = (fahre - 32) / 1.8 
            alert(`${fahre}°F equivalen a ${parseInt(cel)}°C`)
        }
        break;

    case "3":{
            let metros = Number(prompt("Ingresa os metros :"))
            let kilometros = metros / 1000
            alert(`${metros} metros equivalen a ${parseInt(kilometros)}Km`)
        }
        break;

    case "4":{
            let km = Number(prompt("Ingresa os kilometros :"))
            let mt = km * 1000
            alert(`${km} kilometros equivalen a ${parseInt(mt)} metros`)
        }
        break;

    default:
    
        alert("Opción inválida. Por favor, escoge un número del 1 al 4.");
        break;
}
*/


// -----------------------------------------------------------

/*Ejercicio 4 – Sistema de Descuentos en una Tienda
El usuario debe ingresar:
*/

/*
let precioTotal = Number(prompt("Ingrese el precio total de su compra: "))
let tarjeta = prompt("Es cliente frecuente: SI / NO ") .toLowerCase()

let precioFinal = precioTotal
let mensajeDescuento =  ""

if (precioTotal  > 500) {
    precioFinal = precioTotal * 0.9
    mensajeDescuento += "- Descuento del 10% por compra mayor a 500\n "
    if (tarjeta === "si") {
    precioFinal = precioFinal * 0.95
    mensajeDescuento += "- Descuento del 5% por cliente frecuente\n"
    }
}


else if (precioTotal <= 100) {
    precioFinal = precioTotal * 1.05
    mensajeDescuento += "- Recargo del 5% por compra menor o igual a 100"
}

if (mensajeDescuento === "") {
    mensajeDescuento = "- Descuento Ninguno (Tarifa Regular)"
}

alert(`--- RESUMEN DE COMPRA ---
Movimientos aplicados:
${mensajeDescuento}
El precio final es: $${parseInt(precioFinal)}`)
*/

// -----------------------------------------------------------

/*
Ejercicio 5 – Calculadora de Edad y Etapa de Vida
Pide al usuario:
*/

let añoNacimieto = Number(prompt ("Ingresa año de nacimiento: "))
let añoActual = Number (prompt("Ingresa el año actual: "))
let verificacion = prompt("Ya cumpliste años este año? SI / NO :").toLowerCase()
let edad =  añoActual - añoNacimieto

if (verificacion === "no") {
    edad --;
}

if (edad < 18) {
    alert ("Menor de edad")
    } else if (edad >= 18 && edad <= 30){
        alert ("Adulto Joven")
    } else if (edad >= 31 && edad <= 59){
        alert ("Adulto")
    } else 
        { alert ("Adulto mayor")
    }
