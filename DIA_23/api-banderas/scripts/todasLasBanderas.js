

// conectamos la etiqueta html deseada con js llamandolo con query ..

let banderas = document.querySelector("#banderas");

// esta funcion hace un fech a data.json para poder consumir la info ..

async function traerBanderas() {
    try{

    let response = await fetch("../data.json")
    let data = await response.json();
    return data

    } catch (error) {
        console.error("Algo salio mal",error)
    }
}

let dataBanderas = await traerBanderas()

console.log(dataBanderas)




// Esta funcion crea las cards de los paises que se encuentran del array que se les pase ...

function mostrarPaises(grupoDePaises){
    for(let i = 0 ; i < grupoDePaises.length ; i++){
    banderas.innerHTML += `
        <div class="max-w-75 w-full h-full bg-white rounded-md overflow-hidden shadow  dark:bg-slate-700 dark:text-white">
            <div class="w-full h-44 overflow-hidden">
                <img src="${grupoDePaises[i].flag}" alt="" class="w-full h-full object-cover" >
            </div>  
            <div class="px-6 py-10">
                <p class="font-bold mb-4">${grupoDePaises[i].name}</p>
                <p> <span class="font-semibold">Population:</span>${grupoDePaises[i].population}</p>
                <p> <span class="font-semibold">Region:</span>${grupoDePaises[i].region}</p>
                <p> <span class="font-semibold">Capital:</span>${grupoDePaises[i].capital}</p>
            </div>
        </div>`;

        }
}


/* let paisesDeAfrica = dataBanderas.filter(pais =>pais.region === "Africa")
let paisesDeAsia = dataBanderas.filter(pais =>pais.region === "Asia") */

// filtro region es el select que tiene las opciones en mi html

let filtroRegion = document.querySelector("#filtroRegion")
// filtroInput es el input que busca por letras los paises
let filtroInput = document.querySelector("#filtroInput")

filtroRegion.addEventListener("change", filtrarPaises)
filtroInput.addEventListener("input", filtrarPaises)


// esta funcion aplica 2 filtros:
// 1- por region: segun lo que seleccione en el select de id "filtroRegion"
// 2- por input: segun lo que se escriba en el input de id"filtroInput"

function filtrarPaises(){
    let region = filtroRegion.value
    let contenidoInput = filtroInput.value.toLowerCase()
    let paisesFiltrados = dataBanderas

    if  (region !== "Todas"){
        paisesFiltrados = paisesFiltrados.filter(pais =>pais.region === region)
    }

    paisesFiltrados = paisesFiltrados.filter(pais => pais.name.toLowerCase().includes(contenidoInput))

    banderas.innerHTML = ""
    mostrarPaises(paisesFiltrados)
}
filtrarPaises()
