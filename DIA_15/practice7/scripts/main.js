import { abrirCalculadora, abrirCalculadoraDePeso, abrirCalculadoraDeAreas,abrirCalculadoraDeTemperatura,abrirCalculadoraDeMedidas } from "./practicacalculadora2.js"


let abrir = prompt(`Que calculadora deseas abrir:
    1- Calculadora Normal
    2- Calculadora de Peso en otros cuerpos celestes
    3- Calculadora de Áreas de Figuras Geométricas 
    4- Calculadora conversion de Temperatura
    5- Calculadora conversion de Medidas
    
    `)

if (abrir === "1") {
    abrirCalculadora()
} else if (abrir === "2") {
    abrirCalculadoraDePeso()
} else if (abrir === "3") {
    abrirCalculadoraDeAreas()
} else if (abrir === "4") {
    abrirCalculadoraDeTemperatura()
} else if (abrir === "5") {
    abrirCalculadoraDeMedidas()
}
