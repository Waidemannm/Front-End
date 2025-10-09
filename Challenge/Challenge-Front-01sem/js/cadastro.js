const cpf = document.querySelector("#idCPF");
const labelCPF = document.querySelector("#labelCPF");
let validCPF = false;
const telefone = document.querySelector("#idTelefone");
const labelTelefone = document.querySelector("#labelTelefone");
let validTelefone = false;
const nome = document.querySelector("#idNome");
const labelNome = document.querySelector("#labelNome");
let validNome = false;
const senha = document.querySelector("#idSenha")
const labelSenha = document.querySelector("#labelSenha");
let validSenha = false;
const msgError = document.querySelector("#msgError");
const msgSuccess = document.querySelector("#msgSuccess");
const msgErro = document.querySelector("#msgErro");
const msgSuce = document.querySelector("#msgSuce");
const form = document.querySelector("#formCadastro");

cpf.addEventListener('keyup', () => {
  if(cpf.value.length < 11 || cpf.value.length > 11){
    labelCPF.innerHTML = "Digite seu CPF *Insira 11 números";
    cpf.setAttribute('style', 'color: red');
    validCPF = false;
  }else{
    labelCPF.innerHTML = "Digite seu CPF :";
    cpf.setAttribute('style', 'color: green');
    validCPF = true;
  }
})

telefone.addEventListener('keyup', () => {
  if(telefone.value.length < 11){
    labelTelefone.innerHTML = "Telefone *Insira um telefone válido";
    telefone.setAttribute('style', 'color: red');
    validTelefone = false;
  }else{
    labelTelefone.innerHTML = "Telefone :";
    telefone.setAttribute('style', 'color: green');
    validTelefone = true;
  }
})

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.innerHTML = "Nome *Insira no mínimo 3 caracteres";
    nome.setAttribute('style', 'color: red');
    validNome = false;
  }else{
    labelNome.innerHTML = "Nome :";
    nome.setAttribute('style', 'color: green');
    validNome = true;
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 4){
    labelSenha.innerHTML = "Senha *Deve ter no mínimo 5 caracteres";
    senha.setAttribute('style', 'color: red');
    validSenha = false;
  }else{
    labelSenha.innerHTML = "Crie sua senha :";
    senha.setAttribute('style', 'color: green');
    validSenha = true;
  }
})

function cadastrar(event){
  event.preventDefault();

  if(validCPF && validTelefone && validNome && validSenha){
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({
      cpfCad: cpf.value,
      telefoneCad: telefone.value,
      nomeCad: nome.value.trim(),
      senhaCad: senha.value
    })

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    
////////////////////////////////////////////////////////////////////////////
    msgSuccess.setAttribute("style", "display: block");
    msgSuce.textContent = "Cadastrando usuário...";
    msgSuce.style.color = "#ffff";
    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""
    setTimeout(() => {
      window.location.href ="../pages-solucao/login.html"; 
    }, 2000);
    form.reset(); 
  }else{
    msgError.setAttribute("style", "display: block")
    msgErro.textContent = "Todos os campos devem ser preenchidos corretamente!";
    msgErro.style.color = "#ffff";
    msgSuccess.setAttribute("style", "display: none")
    msgSuccess.innerHTML = ""
  }
}