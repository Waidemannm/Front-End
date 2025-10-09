const inputFoto = document.querySelector('#idFoto');
const imgbnt = document.querySelector('#imgbnt');
const adcFoto = document.querySelector('#adcFoto');
const previewFoto = document.querySelector('#previewFoto');
const btnfoto = document.querySelector('#btnfoto');
const labelTelefone = document.querySelector('#labelTelefone');
const labelEmail = document.querySelector('#labelEmail');
const labelCpf = document.querySelector('#labelCpf');
const labelSenha = document.querySelector('#labelSenha');
const nome = document.querySelector('#idNome');
const telefone = document.querySelector('#idTelefone');
const email = document.querySelector('#idEmail');
const cpf = document.querySelector('#idCpf');
const senha = document.querySelector('#idSenha');
const foto = document.querySelector('#idFoto');
const msgError = document.querySelector("#msgError");
const msgSuccess = document.querySelector("#msgSuccess");
const msgErro = document.querySelector("#msgErro");
const msgSuce = document.querySelector("#msgSuce");
const form = document.querySelector('#frmCadastro');
const btn = document.querySelector('#btnCadastro');
validTelefone = false;
validEmail = false;
validCpf = false;
validSenha = false;

inputFoto.addEventListener('change', function() {
    const arquivo = this.files[0];
    if (arquivo) {
        const url = URL.createObjectURL(arquivo);
        previewFoto.src = url;
        previewFoto.style.display = 'block';

        // Oculta o conteúdo do botão (ícone e texto)
        imgbnt.style.display = 'none';
        adcFoto.style.display = 'none';
        //tira o padding da area de adcionar foto
        btnfoto.setAttribute('style', 'padding: 0');
    }
});

telefone.addEventListener('keyup', () => {
    if(telefone.value.length < 11){
      labelTelefone.innerHTML = "Telefone *inválido";
      telefone.setAttribute('style', 'color: red');
      validTelefone = false;
    }else{
      labelTelefone.innerHTML = "Telefone";
      telefone.setAttribute('style', 'color: green');
      validTelefone = true;
    }
  })

  email.addEventListener('keyup', () => {
    if(email.value.length < 2){
      labelEmail.innerHTML = "Email *Insira um email válido";
      email.setAttribute('style', 'color: red');
      validEmail = false;
    }else{
        labelEmail.innerHTML = "Email";
        email.setAttribute('style', 'color: green');
        validEmail = true;
    }
  })

cpf.addEventListener('keyup', () => {
    if(cpf.value.length < 11 || cpf.value.length > 11){
      labelCpf.innerHTML = "CPF *Insira 11 números";
      cpf.setAttribute('style', 'color: red');
      validCpf = false;
    }else{
      labelCpf.innerHTML = "CPF";
      cpf.setAttribute('style', 'color: green');
      validCpf = true;
    }
  })
   
  senha.addEventListener('keyup', () => {
    if(senha.value.length <= 4){
      labelSenha.innerHTML = "Senha *Deve ter no mínimo 5 caracteres";
      senha.setAttribute('style', 'color: red');
      validSenha = false;
    }else{
      labelSenha.innerHTML = "Criar senha";
      senha.setAttribute('style', 'color: green');
      validSenha = true;
    }
  })

function cadastrar(event) {
  event.preventDefault();
  if(validCpf && validTelefone && validEmail && validSenha){
        const arquivo = inputFoto.files[0];

        if (arquivo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64Foto = e.target.result;
                const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

                usuarios.push({
                    nomeCad: nome.value.trim(),
                    telefoneCad: telefone.value,
                    emailCad: email.value,
                    cpfCad: cpf.value,
                    senhaCad: senha.value.trim(),
                    fotoCad: base64Foto
                });

                localStorage.setItem("usuarios", JSON.stringify(usuarios));

                msgSuccess.style.display = 'flex';
                msgSuce.textContent = "Cadastrando usuário...";
                msgSuce.style.color = "#fff";
                msgError.style.display = 'none';
                msgErro.textContent = "";

                setTimeout(() => {
                    window.location.href = "../pages-petsos/principal.html";
                }, 2000);

                form.reset();
                previewFoto.src = '';
                previewFoto.style.display = 'none';
                imgbnt.style.display = 'block';
                adcFoto.style.display = 'block';
                btnfoto.style.padding = '20px';
            };
            reader.readAsDataURL(arquivo);
        } else {
            msgError.style.display = 'flex';
            msgErro.textContent = "Adicione uma foto!";
            msgErro.style.color = "#fff";
        }

    } else {
        msgError.style.display = 'flex';
        msgErro.textContent = "Todos os campos devem ser preenchidos corretamente!";
        msgErro.style.color = "#fff";
        msgSuccess.style.display = 'none';
        msgSuce.textContent = "";
    }
};
btn.addEventListener('click', cadastrar);