const botaoDiminuir = document.getElementById("diminuir");
const botaoAumentar = document.getElementById("aumentar");
const numeroCaracteres = document.getElementById("numero-caracteres");

let tamanhoSenha = 12;

numeroCaracteres.textContent = tamanhoSenha;

botaoAumentar.addEventListener("click", () => {
    tamanhoSenha++;
    numeroCaracteres.textContent = tamanhoSenha;
});

botaoDiminuir.addEventListener("click", () => {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        numeroCaracteres.textContent = tamanhoSenha;
    }
});


// BOTÃO GERAR SENHA
const botaoGerar = document.getElementById("gerar-senha");
const campoSenha = document.getElementById("campo-senha");

botaoGerar.addEventListener("click", () => {

    let caracteres = "";

    const maiusculas = document.getElementById("maiusculas");
    const minusculas = document.getElementById("minusculas");
    const numeros = document.getElementById("numeros");
    const simbolos = document.getElementById("simbolos");


    if (maiusculas.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (minusculas.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numeros.checked) {
        caracteres += "0123456789";
    }

    if (simbolos.checked) {
        caracteres += "!@#$%&*";
    }


    let senha = "";

    for (let i = 0; i < tamanhoSenha; i++) {

        let numeroAleatorio = Math.floor(
            Math.random() * caracteres.length
        );

        senha += caracteres[numeroAleatorio];

    }

    campoSenha.value = senha;

});