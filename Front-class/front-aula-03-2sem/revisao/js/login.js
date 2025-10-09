
let usuario = {
    email : "jo@email.com",
    senha : "12345",
    nome  : "José das Couve",
    status: true,
}

//Capturando o botão de login com o método getElementById("id");
// const botaoSubmit = document.getElementById("btnSubmit");
// const email = document.getElementById("email");
// const senha = document.getElementById("password");

// console.log(botaoSubmit,email,senha);

//Capturando o botão de login com o método querySelector(expression);
// const botaoSubmit = document.querySelector("div #btnSubmit");
// const botaoSubmit = document.querySelector("button[type='submit']");

// //Capturando vários campos com o querySelectorAll(expression)
// const campos = [...document.querySelectorAll("input")];
// campos[0].value = "TESTE";

// console.log(botaoSubmit,campos[0].value);


//Capturar o botão de login
const botaoSubmit = document.querySelector("#btnSubmit");

//Adicionar um LISTENER(Escutador de Eventos / Detector de ações).
botaoSubmit.addEventListener("click", (e)=>{

    e.preventDefault();

    //Capturar os campos
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;

    //Validando os dados do Objeto contra os dados do FORM...
    if( (usuario.email === email) && (usuario.senha === senha) ){
        localStorage.setItem("usuario-logado", JSON.stringify(usuario))
        alert("Login realizado com SUCESSO!");
        window.location.href = "../sucesso.html";
    }else{
        alert("Email ou Senha incorretos!");
    }
});

