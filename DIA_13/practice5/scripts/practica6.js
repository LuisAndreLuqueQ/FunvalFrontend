


let saldo = 1000;
let continuar = true;


while (continuar) {
    
    let opcion = prompt(
        `--- CUENTA BANCARIA FUNVAL ---\n
        ¿Qué operación deseas realizar? 
        Por favor, elija una opción (1-4):\n
        1. Ingresar dinero
        2. Retirar dinero
        3. Consultar saldo
        4. Salir` 
    
    )

    // Para mi cierre
    if (opcion === null || opcion === "4") {
        alert("Gracias.¡Hasta luego!")
        break; 
    }

    // Para evaluar cada opcion
    switch (opcion) {
        case "1":
            let ingreso = Number(prompt("¿Cuánto dinero deseas ingresar?"))
            saldo = saldo + ingreso
            alert("Has ingresado " + ingreso + " Soles. Tu saldo actual es de " + saldo + " Soles")
            break;

        case "2":
            let retiro = Number(prompt("¿Cuánto dinero deseas retirar?"))
            
            
            if (retiro > saldo) {
                alert("Saldo insuficiente")
            } else {
                saldo = saldo - retiro
                alert("Has retirado " + retiro + " Soles. Tu saldo actual es de " + saldo + " Soles")
            }
            break;

        case "3":
            alert("Tu saldo actual es de " + saldo + " Soles")
            break;

        default:
            alert("Opción no válida.")
            break;
    }

    
    continuar = confirm("¿Deseas realizar otra operación?")
    
    if (continuar === false) {
        alert("Gracias.¡Hasta luego!")
    }
}