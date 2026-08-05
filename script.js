```javascript
console.log("Script carregado");

// ELEMENTOS
const botaoDiminuir = document.getElementById("diminuir");
const botaoAumentar = document.getElementById("aumentar");
const numeroCaracteres = document.getElementById("numero-caracteres");

const botaoGerar = document.getElementById("gerar-senha");
const campoSenha = document.getElementById("campo-senha");

const forcaSenha = document.getElementById("forca");
const textoForca = document.getElementById("texto-forca");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

let tamanhoSenha = 12;

numeroCaracteres.textContent = tamanhoSenha;


// AUMENTAR TAMANHO
botaoAumentar.addEventListener("click", () => {
    tamanhoSenha++;
    numeroCaracteres.textContent = tamanhoSenha;
    classificaSenha();
});


// DIMINUIR TAMANHO
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
        caracteres += "!@#$%&*()-_=+[]{}<>?";
    }


    if (caracteres.length === 0) {
        alert("Selecione pelo menos uma opção.");
        return;
    }


    let senha = "";

    for (let i = 0; i < tamanhoSenha; i++) {

        let indice = Math.floor(
            Math.random() * caracteres.length
        );

        senha += caracteres[indice];

    }


    campoSenha.value = senha;

    classificaSenha();

});


// VERIFICA FORÇA DA SENHA
function classificaSenha() {

    let pontos = 0;


    // tamanho
    if (tamanhoSenha >= 8) {
        pontos++;
    }

    if (tamanhoSenha >= 12) {
        pontos++;
    }


    // tipos de caracteres
    if (maiusculas.checked) {
        pontos++;
    }

    if (minusculas.checked) {
        pontos++;
    }

    if (numeros.checked) {
        pontos++;
    }

    if (simbolos.checked) {
        pontos++;
    }


    // remove estados antigos
    forcaSenha.classList.remove(
        "fraca",
        "media",
        "forte"
    );


    // define resultado
    if (pontos <= 2) {

        forcaSenha.classList.add("fraca");
        textoForca.textContent = "Fraca";

    } else if (pontos <= 4) {

        forcaSenha.classList.add("media");
        textoForca.textContent = "Média";

    } else {

        forcaSenha.classList.add("forte");
        textoForca.textContent = "Forte";

    }

}


// Atualiza ao mudar opções
maiusculas.addEventListener("change", classificaSenha);
minusculas.addEventListener("change", classificaSenha);
numeros.addEventListener("change", classificaSenha);
simbolos.addEventListener("change", classificaSenha);


// Estado inicial
classificaSenha();
```
