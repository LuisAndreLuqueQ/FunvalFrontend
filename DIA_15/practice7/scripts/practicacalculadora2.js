/*------ Calculadora Simple -------*/
function sumarDosNumeros(a, b) {
    return a + b
}
function restarDosNumeros(a, b) {
    return a - b
}
function multiplicarDosNumeros(a, b) {
    return a * b
}
function dividirDosNumeros(a, b) {
    return a / b
}
function abrirCalculadora() {
    let num1 = Number(prompt("Primer Número"))
    let num2 = Number(prompt("Segundo Número"))
    let operacion = prompt(`
        Que operación desea realizar:
        1- Sumar
        2- Restar
        3- Multiplicar
        4- Dividir
        `)

    let resultado

    if (operacion === "1") {
        resultado = sumarDosNumeros(num1, num2)
    } else if (operacion === "2") {
        resultado = restarDosNumeros(num1, num2)
    } else if (operacion === "3") {
        resultado = multiplicarDosNumeros(num1, num2)
    } else if (operacion === "4") {
        resultado = dividirDosNumeros(num1, num2)
    }

    alert("tu resultado es " + resultado)
    /* alert(`tu resultado es ${resultado}`) */
}
/*------ Calculadora de Peso en otros Cuerpos Celestes -------*/
function calcularPesoEnLaLuna(peso) {
    let result = peso * 0.165
    let mensaje = "tu peso en la luna es " + result.toFixed(3)
    return mensaje
}
function calcularPesoEnMercurio(peso) {
    let result = peso * 0.378
    let mensaje = "tu peso en Mercurio es " + result.toFixed(3)
    return mensaje
}
function calcularPesoEnVenus(peso) {
    let result = peso * 0.905
    let mensaje = "tu peso en Venus es " + result.toFixed(3)
    return mensaje
}
function abrirCalculadoraDePeso() {
    let lugar = prompt(`
        En que cuerpo celeste quiere calcular su peso:
        1- Luna
        2- Mercurio
        3- Venus
        `)
    let peso = Number(prompt("Ingrese su peso:"))

    if (lugar === "1") {
        alert(calcularPesoEnLaLuna(peso))
    } else if (lugar === "2") {
        alert(calcularPesoEnMercurio(peso))
    } else if (lugar === "3") {
        alert(calcularPesoEnVenus(peso))
    } else {
        alert("Ingresó una opción invalida")
    }
}
/*------ Calculadora de Areas en Figuras Geométricas -------*/
function calcularAreaTriangulo(base, altura) {
    let resultado = base * altura / 2
    return resultado
}
function calcularAreaCirculo(radio) {
    let resultado = Math.PI * (radio ** 2)
    return resultado
}
function calcularAreaCuadrado(lado) {
    let resultado = lado ** 2
    return resultado
}
function calcularAreaRectangulo(base, altura) {
    let resultado = base * altura
    return resultado
}
function abrirCalculadoraDeAreas() {
    let figura = prompt(`
        El área de que figura desea calcular:
        1- triangulo
        2- circulo
        3- cuadrado
        4- rectangulo
        `)
    let resultadoFinal

    if (figura === "1") {
        let base = Number(prompt("ingrese la base:"))
        let altura = Number(prompt("ingrese la altura:"))
        resultadoFinal = calcularAreaTriangulo(base, altura)
    } else if (figura === "2") {
        let radio = Number(prompt("ingrese el radio:"))
        resultadoFinal = calcularAreaCirculo(radio)
    } else if (figura === "3") {
        let lado = Number(prompt("ingrese el lado:"))
        resultadoFinal = calcularAreaCuadrado(lado)
    } else if (figura === "4") {
        let base = Number(prompt("ingrese la base:"))
        let altura = Number(prompt("ingrese la altura:"))
        resultadoFinal = calcularAreaRectangulo(base, altura)
    } else {
        alert("Ingreso una opción inválida")
    }
    alert("El area de la figura es " + resultadoFinal.toFixed(2))

}
/* Calculadora de cambio de temperatura Celsius a Fahrenheit y Kelvin a Fahrenheit  */

function conversionCelciusAFharenheit(celcius) {
    return (celcius * 7)/2
}
function conversionKelvinAFahrenheit(kelvin) {
    return kelvin / 2.6
}

function abrirCalculadoraDeTemperatura() {

    let operacion = prompt(`
        Que operación desea realizar?, escoje 1 o 2 :
        1- Celsius a Fharenheit
        2- Kelvin a Fahrenheit
        `)
    let resultadoC;

    if (operacion === "1") {

        let celcius = Number(prompt("Ingrese los grados Celcius"))
        resultadoC = conversionCelciusAFharenheit(celcius) 
/*         alert("tu Conversion es" + resultadoMedidas.toFixed (2) +  " °F ")
 */        
    } else if (operacion === "2") {

        let kelvin = Number(prompt("Ingrese los grados Kelvin")) 
        resultadoC = conversionKelvinAFahrenheit(kelvin)
/*         alert("tu Conversion es" + resultadoMedidas.toFixed (2) +  " °F")
 */        
    } else {
        alert("ingrese una opcion valida")
    }
    
    alert(`tu Conversion es" + (${resultadoC.toFixed (2)}) Unidades`)
}

/* Calculadora de cambio de unidades Metros a Pies y Kilometros a Millas  */


function conversionMetrosAPies(metros) {
    return metros * 3.28
}
function conversionKilometrosAMillas(kilometros) {
    return kilometros / 1.6
}

function abrirCalculadoraDeMedidas() {

    let operacion = prompt(`
        Que operación desea realizar?, escoje 1 o 2 :
        1- Metros a Pies
        2- Kilometros a Millas
        `)
    let resultadoMedidas;

    if (operacion === "1") {

        let metros = Number(prompt("Ingrese los metos"))
        resultadoMedidas = conversionMetrosAPies(metros)
/*         alert("tu Conversion es" + resultadoMedidas.toFixed (2) +  " Pies ")
 */        
    } else if (operacion === "2") {

        let kilometros = Number(prompt("Ingrese los kilometros")) 
        resultadoMedidas = conversionKilometrosAMillas(kilometros)
/*         alert("tu Conversion es" + resultadoMedidas.toFixed (2) +  " Millas ")
 */        
    } else {
        alert("ingrese una opcion valida")
    }
    alert("tu Conversion es " + resultadoMedidas.toFixed (2))
    /* alert(`tu Conversion es" + (${resultadoMedidas}.toFixed (2)) Unidades`) */
}
// -------------------------------------------------------------------




export { abrirCalculadora, abrirCalculadoraDePeso, abrirCalculadoraDeAreas,abrirCalculadoraDeTemperatura,abrirCalculadoraDeMedidas }