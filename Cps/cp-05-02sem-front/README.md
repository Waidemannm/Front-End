# cp-05-02sem-front 

🧪 Exercício 1: Listagem de Produtos com useEffect e useState
Objetivo: Fazer uma requisição GET à API e renderizar os dados.

Tarefa:

Crie um componente ProdutoList.

Use useEffect para buscar os Produtos da rota /produtos.

Armazene os dados com useState.

Renderize uma lista com nome e email de cada produto.

Tipar corretamente os dados recebidos.

Se já foi realizado - padronizar a estilização


🧪 Exercício 2: Detalhes do produto com useParams
Objetivo: Navegar para uma rota dinâmica e buscar dados específicos utilizando Cards estilizados

Tarefa:

Crie uma rota /produtos/:id que renderiza o componente ProdutoDetail.

Use useParams para capturar o id.

Faça uma requisição GET para /produtos/:id.

Exiba os dados do produto (id,nome, preco) ou o que for referente ao objeto trabalhado.

Tipar corretamente o retorno da API.


Se já foi realizado - padronizar a estilização


🧪 Exercício 3: Formulário de Criação com react-hook-form e POST
Objetivo: Criar um novo obj via formulário.

Tarefa:

Crie um componente CreateProdutoForm.

Use react-hook-form para capturar os dados do obj trabalhado

Ao enviar, faça uma requisição POST para o obj.

Após sucesso, redirecione para a lista usando useNavigate.

Extras:

Valide os campos (ex: preço obrigatório).

Tipar os dados do formulário.

🧪 Exercício 4: Edição de Produtos com PUT
Objetivo: Editar dados existentes usando formulário e rota dinâmica.

Tarefa:

Crie uma rota /produtos/:id/edit que renderiza EditProdutoForm.

Use useParams para capturar o id.

Busque os dados do produto e preencha o formulário.

Ao enviar, faça uma requisição PUT para /produtos/:id.

Redirecione para /produtos/:id.

Extras:

Reutilize o componente de formulário do exercício 3 com props.

🧪 Exercício 5: Remoção de Produto com DELETE
Objetivo: Deletar um produto da lista.

Tarefa:

No componente ProdutoList, adicione um botão "Excluir" ao lado de cada produto.

Ao clicar, faça uma requisição DELETE para /produtos/:id.

Atualize a lista após a exclusão.

Extras:

Adicione uma confirmação antes de excluir.

Tipar corretamente a função de exclusão.

- Utilize o exercício da aula como base deste exercício.
- O projeto deve ser realizado em grupo do challenger e entregue somente o projeto sem a pasta node_modules. - Caso a pasta node_modules for entregue será descontado 50% da nota.
- Coloque todos os dados dos integrantes e detalhes do projeto no README.MD


# Integrantes
Moisés Waidemann Molinillo Júnior, RM: 563719 
Gabriel Sbrana Campos, RM: 565849 
Thiago Rodrigues da Mota, RM: 563650

 # detalhes do projeto
O projeto cp-05-02sem-front é uma aplicação frontend desenvolvida em React com TypeScript, criada como parte de um desafio acadêmico para exercitar os principais conceitos de desenvolvimento web moderno. A proposta consiste em implementar, de forma prática e organizada, todas as operações do ciclo CRUD (Create, Read, Update, Delete) em um contexto de listagem e gerenciamento de produtos.

A aplicação foi estruturada em etapas, contemplando desde a listagem de dados consumidos por meio de requisições HTTP até a criação de rotas dinâmicas e manipulação de formulários. Cada exercício representa um avanço incremental no domínio das ferramentas:

Listagem de produtos (GET): a aplicação consome dados de uma API e exibe os produtos de maneira organizada, utilizando componentes React e estilização padronizada.

Detalhes de produto por ID (rota dinâmica): a navegação inclui rotas parametrizadas que permitem acessar informações específicas de um item.

Criação de produto (POST): formulários construídos com a biblioteca react-hook-form facilitam a coleta e validação de dados antes de enviar novas informações ao backend.

Edição de produto (PUT): o sistema possibilita atualizar registros existentes, mantendo consistência com os dados exibidos.

Exclusão de produto (DELETE): a funcionalidade de remoção fecha o ciclo CRUD, garantindo ao usuário total controle sobre os itens.

Além do uso de React Hooks como useState, useEffect, useParams e useNavigate, a aplicação reforça boas práticas modernas, como tipagem forte em TypeScript para maior segurança e manutenção, além da organização dos componentes em módulos reutilizáveis.
