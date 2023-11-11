const piedra = document.querySelector('.boton-jugada[data-jugada="piedra"]')
const papel = document.querySelector('.boton-jugada[data-jugada="papel"]')
const tijera = document.querySelector('.boton-jugada[data-jugada="tijera"]')
let jugada = "";
let jugadaOrdenador = "";
let resultado = "";
const contadorusuario = document.getElementById("contador-usuario");
const contadorordenador = document.getElementById("contador-ordenador");
let puntosusuarios = 0
let puntosordenador = 0

let posibilidades = ["piedra", "papel", "tijera"]

let comparar = function (indiceUsuario) {

    let indiceOrdenador = Math.floor(Math.random() * 3)
    console.log(indiceOrdenador)
    if (indiceUsuario == indiceOrdenador) {
        resultado = "Empate"
    } else if (indiceUsuario == indiceOrdenador -1 ) {
        puntosordenador = puntosordenador + 1;
        resultado = "Gana ordenador"
    } else if (indiceUsuario == 2 && indiceOrdenador==0) {
        puntosordenador = puntosordenador + 1;
        resultado = "Gana ordenador";
    } else {
        puntosusuarios = puntosusuarios +1;
        resultado = "Ganas tú";
    }

    const resultados = document.getElementById("resultados")
    resultados.innerHTML=`<p>Tú ha elegido ${posibilidades[indiceUsuario]} y el ordenador ha elegido ${posibilidades[indiceOrdenador]} . ${resultado}</p>`
contadorordenador.textContent =`Puntos de la máquina: ${puntosordenador}`
contadorusuario.textContent =`tus puntos: ${puntosusuarios}`
}




piedra.addEventListener("click", function() {
    jugada = 0
    console.log(jugada)
    console.log(comparar(jugada));
   
})

papel.addEventListener("click", function() {
    jugada = 1
    console.log(jugada)
    console.log(comparar(jugada));
})

tijera.addEventListener("click", function() {
    jugada = 2
    console.log(jugada)
    console.log(comparar(jugada));
})
