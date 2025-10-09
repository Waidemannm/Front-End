const tabela = document.querySelector("#tabelaUsuarios");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
 
usuarios.forEach(usuario => {
  const linha = document.createElement("tr");
 
  linha.innerHTML = `
    <td>${usuario.nomeCad}</td>
    <td>${usuario.telefoneCad}</td>
    <td>${usuario.emailCad}</td>
    <td>${usuario.cpfCad}</td>  
    <td>${usuario.senhaCad}</td>
    <td>${usuario.fotoCad}</td>
  `;
 
  tabela.appendChild(linha);
});
