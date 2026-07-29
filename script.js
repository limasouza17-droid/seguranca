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
const botaoGerar = document.getElementById("gerar-senha");
const campoSenha = document.getElementById("campo-senha");

botaoGerar.addEventListener("click", () => {

    campoSenha.value = "MinhaSenha123!";

});