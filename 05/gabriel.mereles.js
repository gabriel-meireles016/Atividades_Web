function mudarCor() {
	var div = document.getElementById("quadrado");
    div.style["background-color"] = "red";
}

function voltarCor(){
    var div = document.getElementById("quadrado");
    div.style["background-color"] = "gray";
}

function nome(){
    var nome = prompt("Digite seu nome:");

    if (nome !== null && nome !== "") {
        alert("Olá, " + nome + "! Bem-vindo!!!")
    }
    
}
