const tabela = document.querySelector("#tabelaPerdidos");
const perdidos = JSON.parse(localStorage.getItem("perdidos")) || [];
 
perdidos.forEach(perdido => {
  const linha = document.createElement("tr");
 
  linha.innerHTML = `
    <td>${perdido.nomeCad}</td>
    <td>${perdido.descricaoCad}</td>
    <td>${perdido.dataCad}</td>
    <td>${perdido.fotoCad}</td>
  `;
 
  tabela.appendChild(linha);
});
