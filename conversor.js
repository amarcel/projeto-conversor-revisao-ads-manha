let campoReal = document.getElementById("real")
let campoDolar = document.getElementById("dolar")
let campoEuro = document.getElementById("euro")

let valorReal = 0.0, valorDolar = 0.0, valorEuro = 0.0

function pegarValores() {
    valorReal = parseFloat(campoReal.value)
    valorDolar = parseFloat(campoDolar.value)
    valorEuro = parseFloat(campoEuro.value)
}
function converter() {
    pegarValores()
    if ( ! isNaN(valorReal) && valorReal > 0) {
        // US$ 1,00 vale R$ 4,50
        // €$ 1,00  vale R$ 5,15
        campoDolar.value = (valorReal / 4.50).toFixed(2)
        campoEuro.value = (valorReal / 5.15).toFixed(2)
    } else {
        alert("Valor de real inválido.")
    }
}