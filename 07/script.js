function confirmandoSenha(){
    var senha = document.getElementById("senha");
    var confirmaSenha = document.getElementById("confirmaSenha");
    var msgErro = document.getElementById("senhaErro");
    
    if (senha.value == confirmaSenha.value) {
        msgErro.style.display = "none";
    } else {
        msgErro.style.display = "block";
        senha.focus();
    }
}

function validaSenhaFormato(){
    var senha = document.getElementById("senha").value;
    var msgValidaTamanho = document.getElementById("senhaValidaTamanho");
    var msgValidaMinuscula = document.getElementById("senhaValidaMinuscula");
    var msgValidaMaiuscula = document.getElementById("senhaValidaMaiuscula");
    var msgValidaNumero = document.getElementById("senhaValidaNumero");
    var msgValidaEspeciais = document.getElementById("senhaValidaEspeciais");

    var foco = false;

    if (senha.length < 6 || senha.length > 15) {
        msgValidaTamanho.setAttribute("class", "invalido");
        if (!foco) {
            document.getElementById("senha").focus();
            foco = true;
        }
    } else {
        msgValidaTamanho.setAttribute("class", "valido"); 
    }

    if (!senha.match(/[a-z]/g)) {
        msgValidaMinuscula.setAttribute("class", "invalido");
        if (!foco) {
            document.getElementById("senha").focus;
            foco = true;
        }
    } else {
        msgValidaMinuscula.setAttribute("class", "valido");
    }

    if (!senha.match(/[A-Z]/g)) {
        msgValidaMaiuscula.setAttribute("class", "invalido");
        if (!foco) {
            document.getElementById("senha").focus;
            foco = true;
        }
    } else {
        msgValidaMaiuscula.setAttribute("class", "valido");
    }

    if (!senha.match(/[0-9]/g)) {
        msgValidaNumero.setAttribute("class", "invalido");
        if (!foco) {
            document.getElementById("senha").focus;
            foco = true;
        }
    } else {
        msgValidaNumero.setAttribute("class", "valido");
    }

    if (!senha.match(/\W|_/)) {
        msgValidaEspeciais.setAttribute("class", "invalido");
        if (!foco) {
            document.getElementById("senha").focus;
            foco = true;
        }
    } else {
        msgValidaEspeciais.setAttribute("class", "valido");
    }
}


function validaRGA(){
    //pegando valor
    var rga = document.getElementById("rga");
    var nome = document.getElementById("nome");
    var msgErro = document.getElementById("rgaErro");
    
    var result = buscarNome(rga.value);

    if (result != "") {
        nome.value = result;
        msgErro.style.display = "none";
    } else {
        rga.focus();
        nome.value = "Não encontrado";
        msgErro.style.display = "block";
    }
}

function buscarNome(rga){
    const alunos = new Map();
    alunos.set('2022.1904.038-8', 'Gabriel Meireles Dias Narciso');
    alunos.set('2023.1905.066-0', 'Joao Pedro Santos de Brito');
    alunos.set('2022.1904.007-8', 'Samyr Arruda Vilanova');
    alunos.set('2022.2701.039-5', 'Yasmin Ramos Zavelinski');

    if (alunos.has(rga)) {
        return alunos.get(rga);
    } else return "";

}

function validaData() {
    var data = document.getElementById("data").value;
    var hoje = new Date();
    var dataErro = document.getElementById("dataErro");

    if (data) {
        var dataSelecionada= new Date(data);
        
        if (dataSelecionada <= hoje) {
            dataErro.style.display = "block";
            document.getElementById("data").focus();
        } else {
            dataErro.style.display = "none";
        }
    }
}