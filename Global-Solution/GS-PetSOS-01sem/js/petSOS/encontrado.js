const inputFoto = document.querySelector('#idFoto-encontrado');
const imgbnt = document.querySelector('#imgbnt-encontrado');
const adcFoto = document.querySelector('#adcFoto-encontrado');
const previewFoto = document.querySelector('#previewFoto-encontrado');
const btnfoto = document.querySelector('#btnfoto-encontrado');

const labelDescricao = document.querySelector('#labelDescricao-encontrado');
const labelData = document.querySelector('#labelData-encontrado');
const labelNome = document.querySelector('#labelNome-encontrado');

const descricao = document.querySelector('#idDescricao-encontrado');
const data = document.querySelector('#idData-encontrado');
const nome = document.querySelector('#idNome-encontrado');
const foto = document.querySelector('#idFoto-encontrado');

const msgError = document.querySelector("#msgError-encontrado");
const msgSuccess = document.querySelector("#msgSuccess-encontrado");
const msgErro = document.querySelector("#msgErro-encontrado");
const msgSuce = document.querySelector("#msgSuce-encontrado");

const form = document.querySelector('#frmCadastro-encontrado');
const btn = document.querySelector('#btnCadastro-encontrado');

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
    
    if(validNome && validDescricao){
        const encontrados = JSON.parse(localStorage.getItem("encontrados")) || [];
     
        encontrados.push({
            nomeCad: nome.value.trim(),
            descricaoCad: descricao.value.trim(),
            dataCad: data.value,
            fotoCad: foto.value
        })
     
    localStorage.setItem("encontrados", JSON.stringify(encontrados))

    msgSuccess.setAttribute("style", "display: flex");
    msgSuce.textContent = "Cadastrando animal...";
    msgSuce.style.color = "#ffff";
    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""
    setTimeout(() => {
        //Redireciona para a página principal
        window.location.href = "../pages-petsos/principal.html";
    }, 2000);
    form.reset(
      previewFoto.src = '',
      previewFoto.style.display = 'none',
      imgbnt.style.display = 'block',
      adcFoto.style.display = 'block',
      btnfoto.style.padding = '20px'
    );
  }else{
    msgError.setAttribute("style", "display: flex")
    msgErro.textContent = "Todos os campos devem ser preenchidos corretamente!";
    msgErro.style.color = "#ffff";
    msgSuccess.setAttribute("style", "display: none")
    msgSuccess.innerHTML = ""
  }
}

btn.addEventListener('click', cadastrar);
