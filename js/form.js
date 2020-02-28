var btnAdicionar = document.querySelector("#adicionar-paciente");
//console.log(btnAdicionar);
btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //a função event.preventDefault() evita o comportamento padrão do formulário
    //console.log("olá, eu sou o btn fui clicado");

    var form = document.querySelector("#form-add-paciente");
    // extraindo informações do paciente do form
    // criar função para extrair essas informações

    var paciente = pegarDadosPaciente(form);




    // criando as trs e tds
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");


    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);
    // criando as trs
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // adicionando o paciente 
    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);




    // console.log(pacienteTr)

})

function pegarDadosPaciente(form) {

    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;

}

// titulo.addEventListener("click", function () {
// console.log("fui clicado")

// })