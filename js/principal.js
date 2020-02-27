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
      var imc = peso / (altura * altura)
      //console.log("o valor do imc é: " + imc)
      tdImc.textContent = imc.toFixed(2);//coloca o valor resultande de imc e joga dentro da tdImc

   } else {
      tdImc.textContent = "Altura e/ou Peso Inválidos!"
      console.log("Altura e/ou Peso Inválidos!")
   }

}

var btnAdicionar = document.querySelector("#adicionar-paciente");
//console.log(btnAdicionar);
btnAdicionar.addEventListener("click", function (event) {
   event.preventDefault(); //a função event.preventDefault() evita o comportamento padrão do formulário
   //console.log("olá, eu sou o btn fui clicado");

   var form = document.querySelector("#form-add-paciente");

   var nome = form.nome.value;
   var peso = form.peso.value;
   var altura = form.altura.value;
   var gordura = form.gordura.value;

   //   console.log(nome);
   //   console.log(peso);
   //   console.log(altura);
   //   console.log(gordura);

   var pacienteTr = document.createElement("tr");
   // console.log("pacienteTr");

   var nomeTd = document.createElement("td");
   var pesoTd = document.createElement("td");
   var alturaTd = document.createElement("td");
   var gorduraTd = document.createElement("td");
   var imcTd = document.createElement("td");


   nomeTd.textContent = nome;
   pesoTd.textContent = peso;
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;
   //imcTd.textContent = imc;

   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);

   var tabela = document.querySelector("#tabela-pacientes")

   tabela.appendChild(pacienteTr);


   console.log(pacienteTr)

})

titulo.addEventListener("click", function () {
   //console.log("fui clicado")
})
