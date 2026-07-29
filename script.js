console.log("Script carregado");
const botaoDiminuir = document.getElementById("diminuir");
const botaoAumentar = document.getElementById("aumentar");
const numeroCaracteres = document.getElementById("numero-caracteres");

let tamanhoSenha = 12;

numeroCaracteres.textContent = tamanhoSenha;


// AUMENTAR TAMANHO
botaoAumentar.addEventListener("click", () => {
    tamanhoSenha++;
    numeroCaracteres.textContent = tamanhoSenha;
});


// DIMINUIR TAMANHO
botaoDiminuir.addEventListener("click", () => {
    if (tamanhoSenha > 4) {
        tamanhoSenha--;
        numeroCaracteres.textContent = tamanhoSenha;
    }
});


// GERAR SENHA
const botaoGerar = document.getElementById("gerar-senha");
const campoSenha = document.getElementById("campo-senha");

botaoGerar.addEventListener("click", () => {

    let caracteres = "";

    if (document.getElementById("maiusculas").checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (document.getElementById("minusculas").checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (document.getElementById("numeros").checked) {
        caracteres += "0123456789";
    }

    if (document.getElementById("simbolos").checked) {
        caracteres += "!@#$%&*";
    }


    let senha = "";

    for (let i = 0; i < tamanhoSenha; i++) {

        const indice = Math.floor(Math.random() * caracteres.length);

        senha += caracteres[indice];

    }


    campoSenha.value = senha;

});