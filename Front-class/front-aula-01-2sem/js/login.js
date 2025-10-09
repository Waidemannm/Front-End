let pessoa = {
    nome: "admin",
    senha: "admin",
    email: "dasda@dsad.com",
    idade: 20,
    cidade: "São Paulo",
    estado: "SP",
    pais: "Brasil",
    nomeCompleto: function(){
        return `${this.nome} (${this.email})`;
    }
};
console.log(pessoa.nomeCompleto);