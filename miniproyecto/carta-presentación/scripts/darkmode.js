
// console.log("Hola !! prueba de conexion.js")

let boton = document.querySelector("#btndark")
let documento = document.querySelector("html")
// console.log(boton)
console.log(documento)

function cambiarModo (){
    documento.classList.toggle("dark")
}
boton.addEventListener("click", cambiarModo)