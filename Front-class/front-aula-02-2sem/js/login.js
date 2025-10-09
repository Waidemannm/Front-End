 

let usuario = {
    nome: "José das Couve",
    senha: "12345",
    email :"jo@gmail.com",
    status : true,
    nomeCompleto: function() {
        return `${this.nome} (${this.email})`;
    }
};
console.log(usuario.nomeCompleto());
// Capturando o botão de login com o método getElementById("id");
// const botaoSubmit = document.getElementById("btnSubmit");
// const email = document.getElementById("email");
// const senha = document.getElementById("password");

// console.log(botaoSubmit, email, senha);


//console.log(botaoSubmit);

//console.log(btnSubmit, email, senha)

//capturando o botao de login com o metodo querySelector(expression)
//const botaoSubmit = document.querySelector("div #btnSubmit");
// const botaoSubmit = document.querySelector("button[type='submit']");


// //capturando vario campos com o querySelectorALL(expression)
// const campos =[... document.querySelectorAll("input")];
// campos[0].value = "Teste";
// console.log(botaoSubmit,campos[0].value);

// Capturando o botão de login
const botaoSubmit = document.querySelector("#btnSubmit");
//adicionando um LISTENER (detector de ação)
botaoSubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(e)
    //capturar os campos
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;
    if((usuario.email === email) && (usuario.senha === senha)){
        alert("Login realizado com sucesso");
    }else{
        alert("Email ou Senha incorretos!");
    }
})