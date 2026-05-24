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
return (base *altura)/2
}
function calcularAreaCirculo(radio) {
return (3.14 * radio)
}
function calcularAreaCuadrado(lado) {
return (lado **2)
}
function calcularAreaRectangulo(base, altura) {
return base * altura
}
function abrirCalculadoraDeAreas() {



    let operacion = prompt(`
        Que operación desea realizar:
        1- triangulo
        2- Circulo
        3- Cuadrado
        4- Rectangulo
        `)

    
    let resultadoA

    if (operacion === "1") {

        let baseA = Number(prompt("Base"))
        let alturaA = Number(prompt("Altura"))
        resultadoA = calcularAreaTriangulo(baseA, alturaA)
    } else if (operacion === "2") {

        let radioA = Number(prompt("Radio")) 
        resultadoA = calcularAreaCirculo(radioA)
    } else if (operacion === "3") {

        let ladoA = Number(prompt("Lado"))
        resultadoA = calcularAreaCuadrado(ladoA)
    } else if (operacion === "4") {
        let baseA = Number(prompt("Base"))
        let alturaA = Number(prompt("Altura"))
        resultadoA = calcularAreaRectangulo(baseA, alturaA)
    }

    alert("tu resultado es " + resultadoA)
    /* alert(`tu resultado es ${resultado}`) */
}

let abrir = prompt(`Que calculadora deseas abrir:
    1- Calculadora Normal
    2- Calculadora de Peso en otros cuerpos celestes
    3- Calculadora de Áreas de Figuras Geométricas `)

if (abrir === "1") {
    abrirCalculadora()
} else if (abrir === "2") {
    abrirCalculadoraDePeso()
} else if (abrir === "3") {
    abrirCalculadoraDeAreas()
}
