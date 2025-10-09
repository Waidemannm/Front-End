

// const botaoMenu = document.querySelector("header nav button");

// botaoMenu.addEventListener("click", ()=>{
//     console.log("Agora VITAMINADO!!");
// });

//Tipo de Declarações

// //var
// var nome  = "José";
// //let
// let idade = 23;
// //const
// const pi = 3.14;

// console.log(nome);
// console.log(idade);
// console.log(pi);

//Tipos de dados em JS

// //string
// let nome = "Lucas";
// console.log(typeof nome);

// //number
// let idade = 23;
// console.log(typeof idade);


// let nr1 = 10;
// let nr2 = "10";

// //Recuperando dados de uma condição ternária;
// let resultado = (nr1 === nr2) ?  "O Resultado foi verdadeiro!" : "O Resultado foi falso!";
// console.log(resultado);

// //Diferença entre let e var
// var nome = "José";

//     if(true){
//         let nome = "Lucas";
//         console.log(nome);
//     }

// console.log(nome);


//Manipular o DOM

//const ulMenu = document.getElementById("menu");

//Construindo uma nova lista com elementos li;

//1 - Limpar o elemento ul
// ulMenu.remove();
//ulMenu.innerHTML = "";
//2 - Preencher com novo contéudo
// Utilizando inner HTML
// ulMenu.innerHTML = "<li><a href='#sobre'>TESTE</a></li>";
// Criando um novo elemento li para ser inserido na lista
//let liItem = document.createElement("li");
//liItem.innerHTML = "<a href='#sobre'>TESTE</a>";

//Inserir o li na lista UL
//ulMenu.appendChild(liItem);

//capturando o formulario;
const formulario = document.getElementById("frmContato");
console.log(formulario);

//atrelar um evento ao formulario com addEventListener(envento, funça)´;
formulario.addEventListener("submit", function(e){

    ///suprimindo a açao padrao do elemnto que inicia a acao
    e.preventDefault();


    //capturando os campos/input
    // use .value para pegar o que o usuario digitoi, o input, use .trim para limpar espçao no inicio e fim do input do usuario
    const nome = document.getElementById("idNome").value.trim();
    const email = document.getElementById("idEmail").value.trim();

    //armazenando os dados em um objeto
    let usuario = {
        nomeObj : nome,
        emailobj : email
    }

    //validação dos dados
    try{
        if((usuario.nomeObj == "") || (usuario.nomeObj == undefined)){
            throw new Error("O campo nome deve ser preenchido!");
        }
        
        if((usuario.emailobj == "") || (usuario.emailobj == undefined)){
            throw new Error("O campo email deve ser preenchido!");
        }
    } catch{error}{
        alert(error);
    }

    formulario.reset; 

});





 








