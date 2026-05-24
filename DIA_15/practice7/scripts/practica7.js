
/* Ejercicio 1 – Área de triángulos múltiples
Crea una función llamada calcularAreaTriangulo que reciba base y altura y devuelva el área:

Pide al usuario 3 veces la base y altura de diferentes triángulos usando prompt.

Usa un bucle for para solicitar los datos 3 veces.

Usa condicional para verificar que base y altura sean mayores que 0.

Muestra cada área en consola. */


/* function calcularAreaTriangulo (base, altura){

    let resultado = (base * altura)/2;
    return resultado;
}


    for (let i = 1 ; i <= 3 ; i++){

        let base = Number(prompt(`Triangulo ${i} ingresa la base:`))
        let altura = Number(prompt(`Triangulo ${i} ingresa la altura:`))

        if (base > 0 && altura > 0){
            let area = calcularAreaTriangulo (base, altura);
            console.log(`El área del triángulo ${i} es: ${area} `)

        } else {
            console.log("Error. ingresa una base y altura mayores a 0")
        }

    } */

// -----------------------------------------------

/* Ejercicio 2 – Conversión de Celsius a Fahrenheit
Crea una función convertirAFahrenheit que reciba un valor en Celsius y lo convierta a Fahrenheit:

Pide al usuario 5 temperaturas mediante prompt.

Usa un bucle para hacer las 5 conversiones.

Usa un condicional para verificar que el valor ingresado sea un número.

Muestra cada resultado en consola. */


/* function convertirAFahrenheit (celsius){
    let resultado = (celsius * 1.8)+32
    return resultado
}

for (let i = 1 ; i <= 5 ; i++){
    let celsius = Number(prompt(`Conversion ${i} ingresa la Temperatura °C:`))

    if (!isNaN(celsius)){
        let fahrenheit = convertirAFahrenheit (celsius);
        console.log(`La conversion ${1} es: ${fahrenheit.toFixed(2)} °F`)
    } else {
        console.log(`Error. ingrese un valor numerico`)
    }
}
 */

// -----------------------------------------------

/* Ejercicio 3 – Contar vocales en un texto
Crea una función contarVocales que reciba un texto y devuelva el número de vocales:

Pide al usuario 3 textos mediante prompt.

Usa un bucle para recorrer cada letra del texto.

Usa condicionales para determinar si un carácter es vocal.

Muestra en consola cuántas vocales tiene cada texto.
 */

// -----------------------------------------------

/* Ejercicio 4 – Pares e impares en un rango
Crea una función clasificarParesImpares que reciba dos números inicio y fin y:

Use un bucle for para recorrer todos los números desde inicio hasta fin.

Use condicional para imprimir si cada número es par o impar.

Pide al usuario inicio y fin mediante prompt.

Muestra el resultado en consola. */


function clasificarParesImpares(inicio, fin) {

    for (let i = inicio; i <= fin; i++) {
        
        if (i % 2 === 0) {
            console.log(`El número ${i} es PAR`);
        } else {
            console.log(`El número ${i} es IMPAR`);
        }
        
    }
}

let numeroInicio = Number(prompt("Ingresa el número de INICIO:"));
let numeroFin = Number(prompt("Ingresa el número de FIN:"));

clasificarParesImpares(numeroInicio, numeroFin);

// -----------------------------------------------

/* Ejercicio 5 – Número mayor y suma
Crea una función mayorYSuma que reciba 5 números separados y:

Use un bucle para comparar cada número y encontrar el mayor.

Use condicionales para verificar cuál es el mayor.

Calcula también la suma de los 5 números.

Pide al usuario los 5 números mediante prompt.

Muestra en consola el número mayor y la suma total. */