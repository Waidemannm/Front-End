const tabela = document.querySelector("#tabelaEncontrados");
const encontrados = JSON.parse(localStorage.getItem("encontrados")) || [];
 
encontrados.forEach(encontrado => {
  const linha = document.createElement("tr");
 
  linha.innerHTML = `
    <td>${encontrado.nomeCad}</td>
    <td>${encontrado.descricaoCad}</td>
    <td>${encontrado.dataCad}</td>
    <td>${encontrado.fotoCad}</td>
  `;
 
  tabela.appendChild(linha);
});
