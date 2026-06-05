let darkBtn = document.querySelector("#darkmode")
let documento = document.querySelector("html")

function cambioModoOscuro(params){
    documento.classList.toggle("dark")

}

darkBtn.addEventListener("click",cambioModoOscuro)