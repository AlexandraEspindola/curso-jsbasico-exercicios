var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente")

var pacientes = document.querySelectorAll(".paciente")


for (let index = 0; index < pacientes.length; index++) {

   var paciente = pacientes[index];


   var tdPeso = paciente.querySelector(".info-peso")
   var peso = tdPeso.textContent
   var tdAltura = paciente.querySelector(".info-altura")
   var altura = tdAltura.textContent

   var tdImc = paciente.querySelector(".info-imc")

   var alturaValida = true;
   var pesoValido = true;


   if (peso <= 0 || peso >= 600) {
      //console.log("Peso inválido")
      pesoValido = false;
      tdImc.textContent = "Peso inválido";
      paciente.classList.add("paciente-invalido");
   } else {
      //console.log("peso válido")
   }

   if (altura <= 0 || altura >= 3.0) {
      //console.log("altura inválida")
      alturaValida = false;
      tdImc.textContent = "Altura inválida";
      paciente.classList.add("paciente-invalido");
   } else {
      //console.log("altura valida")
   }

   if (alturaValida && pesoValido) {
      var imc = calculaImc(peso, altura);
      //console.log("o valor do imc é: " + imc)
      tdImc.textContent = imc;//coloca o valor resultande de imc e joga dentro da tdImc

   } else {
      tdImc.textContent = "Altura e/ou Peso Inválidos!"
      console.log("Altura e/ou Peso Inválidos!")
   }

}

function calculaImc(peso, altura) {
   var imc = 0;
   imc = peso / (altura * altura);
   return imc.toFixed(2);
}




