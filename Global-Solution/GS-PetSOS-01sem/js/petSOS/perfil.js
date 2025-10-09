const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioAtual = usuarios[usuarios.length - 1]; // último usuário

const imgPerfil = document.querySelector('#fotoPerfil');
const nomePerfil = document.querySelector('#nomePerfil');
const emailPerfil = document.querySelector('#emailPerfil');

if (usuarioAtual && usuarioAtual.fotoCad && usuarioAtual.nomeCad && usuarioAtual.emailCad) {
    imgPerfil.src = usuarioAtual.fotoCad;
    imgPerfil.style.display = 'block';
    nomePerfil.textContent = usuarioAtual.nomeCad;
    nomePerfil.style.display = 'block';
    emailPerfil.textContent = usuarioAtual.emailCad;
    emailPerfil.style.display = 'block';
}

const perdidos = JSON.parse(localStorage.getItem("perdidos")) || [];
const ultimoAnimal = perdidos[perdidos.length - 1];

const sectionPerdido = document.querySelector('#bartolomeu');
const nomePerdido = document.querySelector('#nomeAnimal');
const fotoPerdido = document.querySelector('.fotoPet'); // classe agora
const data = document.querySelector('#dataAnimal');
const descricao = document.querySelector('#descricaoAnimal')

if (ultimoAnimal && ultimoAnimal.nomeCad && ultimoAnimal.fotoCad && sectionPerdido && ultimoAnimal.dataCad && ultimoAnimal.descricaoCad) {
    fotoPerdido.src = ultimoAnimal.fotoCad;
    fotoPerdido.style.display = 'block';
    sectionPerdido.style.display = 'flex';
    nomePerdido.textContent = ultimoAnimal.nomeCad;
    nomePerdido.style.display = 'block';
    if (ultimoAnimal.dataCad) {
        data.textContent = "Data: " + ultimoAnimal.dataCad;
        data.style.display = 'block';
    }
    if(ultimoAnimal.descricaoCad){
        descricao.textContent = "Descrição: " + ultimoAnimal.descricaoCad;
        descricao.style.display = 'block';
    }
}
