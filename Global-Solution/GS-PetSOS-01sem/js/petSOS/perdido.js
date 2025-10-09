const inputFoto = document.querySelector('#idFoto-animal');
const imgbnt = document.querySelector('#imgbnt-animal');
const adcFoto = document.querySelector('#adcFoto-animal');
const previewFoto = document.querySelector('#previewFoto-animal');
const btnfoto = document.querySelector('#btnfoto-animal');

const labelDescricao = document.querySelector('#labelDescricao-animal');
const labelData = document.querySelector('#labelData-animal');
const labelNome = document.querySelector('#labelNome-animal');

const descricao = document.querySelector('#idDescricao-animal');
const data = document.querySelector('#idData-animal');
const nome = document.querySelector('#idNome-animal');
const foto = document.querySelector('#idFoto-animal');

const msgError = document.querySelector("#msgError-animal");
const msgSuccess = document.querySelector("#msgSuccess-animal");
const msgErro = document.querySelector("#msgErro-animal");
const msgSuce = document.querySelector("#msgSuce-animal");

const form = document.querySelector('#frmCadastro-animal');
const btn = document.querySelector('#btnCadastro-animal');

validNome = false;
validDescricao = false;

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
})


nome.addEventListener('keyup', () => {
    if(nome.value.length < 1){
      labelNome.innerHTML = "Nome *inválido";
      nome.setAttribute('style', 'color: red');
      validNome = false;
    }else{
      labelNome.innerHTML = "Nome";
      nome.setAttribute('style', 'color: green');
      validNome = true;
    }
  })

descricao.addEventListener('keyup', () => {
    if(descricao.value.length < 2){
      labelDescricao.innerHTML = "Descriçao *Inválida";
      descricao.setAttribute('style', 'color: red');
      validDescricao = false;
    }else{
        labelDescricao.innerHTML = "Descriçao";
        descricao.setAttribute('style', 'color: green');
        validDescricao = true;
    }
  })

function cadastrar(event) {
    event.preventDefault();

    if (validNome && validDescricao) {
        const arquivo = inputFoto.files[0];

        if (arquivo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64Foto = e.target.result;
                const perdidos = JSON.parse(localStorage.getItem("perdidos")) || [];

                perdidos.push({
                    nomeCad: nome.value.trim(),
                    descricaoCad: descricao.value.trim(),
                    dataCad: data.value,
                    fotoCad: base64Foto
                });

                localStorage.setItem("perdidos", JSON.stringify(perdidos));

                msgSuccess.style.display = 'flex';
                msgSuce.textContent = "Cadastrando animal...";
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
            msgErro.textContent = "Adicione uma foto do animal!";
            msgErro.style.color = "#fff";
        }
    } else {
        msgError.style.display = 'flex';
        msgErro.textContent = "Todos os campos devem ser preenchidos corretamente!";
        msgErro.style.color = "#fff";
        msgSuccess.style.display = 'none';
        msgSuce.textContent = "";
    }
}
btn.addEventListener('click', cadastrar);
