// recuperando o LocalStorage do login
let usuario = JSON.parse(localStorage.getItem("usuario-logado" ));
if(!localStorage.getItem("usuario-logado")){
    window.location.href = "../login.html";
}

const nome = document.querySelector("#usuarioNome");
const email = document.querySelector("#usuarioEmail");
nome.innerHTML = usuario.nome;
email.innerHTML = usuario.email;

const botaoLogout = document.querySelector("#logout");
botaoLogout.addEventListener("click", ()=>{
    //removendo o usuário do LocalStorage
    localStorage.removeItem("usuario-logado");
    //redirecionando para página de login
    window.location.href ="../login.html";
})
