var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.remove();

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    
});


// console.log(pacientes);

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         this.remove();
//     });

// });

