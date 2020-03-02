var btnAdicionar = document.querySelector("#adicionar-paciente");
//console.log(btnAdicionar);
btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //a função event.preventDefault() evita o comportamento padrão do formulário
    //console.log("olá, eu sou o btn fui clicado");

    var form = document.querySelector("#form-add-paciente");
    // extraindo informações do paciente do form
    // criar função para extrair essas informações

    var paciente = pegarDadosPaciente(form);

    var pacienteTr = montaTr(paciente);

    // adicionando o paciente 
    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);
    form.reset();

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

//abaixo vai montar uma função que recebe um paciente com os dados dele
//e com esses dados pode-se montar essa tr
//essa função vai receber os dados do paciente, ou seja, ela vai receber o paciente objeto como paramentro
//e apartir desse paciente ela vai saber como que cria uma tr, ou seja, ela vai me retornar uma tr criada com todas as tds

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;

}

