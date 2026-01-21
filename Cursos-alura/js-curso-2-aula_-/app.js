let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function textoExibidoNaTela(tag, texto){ 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    textoExibidoNaTela("h1", "Jogo do número secreto");
    textoExibidoNaTela("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `voce utilizou ${tentativa} ${palavraTentativa}, para adivinhar o numero secreto ${numeroSecreto}`;
        textoExibidoNaTela("h1", "Ganhou!");
        textoExibidoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto){
            textoExibidoNaTela("p", "o numero  secreto é menor");
        } else {
            textoExibidoNaTela("p", "o numero secreto é maior");
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo(){
    let campoChute = document.querySelector("input");
    campoChute.value="";
} 

function reiniciarJogo(){
    tentativa = 1;
    exibirMensagemInicial();
    limparCampo();
   numeroSecreto = gerarNumeroAleatorio();
   document.getElementById("reiniciar").setAttribute("disabled", true)
}

