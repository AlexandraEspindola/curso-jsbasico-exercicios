//console.log("fui carregado corretamente")
// var titulo = document.querySelector("h1");
// console.log(titulo)
// console.log(titulo.textContent)
// titulo.textContent = "Aparecida Nutricionista";

var titulo = document.querySelector(".titulo")
titulo.textContent = "help :'("

var paciente = document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent // deu o mesmo resultado sem a variavel peso. Acredito que é pra ficar mais organi
//zado, e não ter que escrever tanto
var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent

// console.log(paciente) //aqui tem que conter o tr (paciente)
// console.log(tdPeso) //aqui tem que conter o td (peso)
// console.log(peso)
// console.log(altura)
// //console.log(tdPeso.textContent) deu certo sem a variavel peso

var tdImc = paciente.querySelector(".info-imc")

if(peso < 0 || peso > 600) {
   console.log("Peso inválido") 
}

if(altura < 0 || altura > 3.0)

var imc = peso/(altura*altura)
console.log(imc)

tdImc.textContent = imc;//coloca o valor resultande de imc e joga dentro da tdImc
