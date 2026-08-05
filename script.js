console.log("Script carregado");

// ELEMENTOS
const botaoDiminuir = document.getElementById("diminuir");
const botaoAumentar = document.getElementById("aumentar");
const numeroCaracteres = document.getElementById("numero-caracteres");

const botaoGerar = document.getElementById("gerar-senha");
const campoSenha = document.getElementById("campo-senha");

const forcaSenha = document.getElementById("forca");
const textoForca = document.getElementById("texto-forca");

let tamanhoSenha = 12;

numeroCaracteres.textContent = tamanhoSenha;

// AUMENTAR
botaoAumentar.addEventListener("click", () => {
    tamanhoSenha++;
    numeroCaracteres.textContent = tamanhoSenha;
    classificaSenha();
});

// DIMINUIR
botaoDiminuir.addEventListener("click", () => {
    if (tamanhoSenha > 4) {
        tamanhoSenha--;
        numeroCaracteres.textContent = tamanhoSenha;
        classificaSenha();
    }
});

// GERAR SENHA
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
        caracteres += "!@#$%&*()-_=+[]{}<>?";
    }

    // Nenhuma opção marcada
    if (caracteres.length === 0) {
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanhoSenha; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    campoSenha.value = senha;

    classificaSenha();
});

// CLASSIFICAÇÃO DA FORÇA
function classificaSenha() {

    forcaSenha.classList.remove("fraca", "media", "forte");

    if (tamanhoSenha <= 5) {

        forcaSenha.classList.add("fraca");
        textoForca.textContent = "Fraca";

    } else if (tamanhoSenha <= 11) {

        forcaSenha.classList.add("media");
        textoForca.textContent = "Média";

    } else {

        forcaSenha.classList.add("forte");
        textoForca.textContent = "Forte";

    }

}

// Estado inicial
classificaSenha();