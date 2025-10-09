# Exercício para a aula do dia 07/04/2025

# 🧠 Exercício Prático – Página de Viagem (HTML)

Você foi contratado para criar uma **página de apresentação turística** chamada `destino.html`. Essa página deve conter informações sobre um lugar fictício ou real que você gostaria de visitar.

Siga as instruções abaixo utilizando **apenas HTML** (sem JavaScript, o utilize CSS externo).

---

## 🎯 Objetivos

- Utilizar corretamente **links externos** e **internos**  
- Criar **âncoras** para navegação dentro da página  
- Adicionar **imagens** com texto alternativo  
- Criar **links com imagens clicáveis**
- Estilização com **CSS externo**.

---

## 📌 Estrutura da Página

### ✅ Parte 1 – Cabeçalho com navegação

- Crie um `<h1>` com o nome do destino (ex: “Conheça a Ilha do Sol”)
- Abaixo, crie um menu de navegação com os seguintes links:
  - Sobre o lugar
  - Como chegar
  - Galeria
  - Contato
  - A página atual deve sempre aparecer em destaque, utilize o atributo de classe para estilizar os itens do menu e também o elemento da página ativa.

> Esses links devem usar **âncoras** (`href="#id"`), levando para seções internas da mesma página.

---

### ✅ Parte 2 – Seção: Sobre o lugar

- Crie uma seção com `id="sobre"`  
- Adicione um parágrafo com uma descrição do lugar

---

### ✅ Parte 3 – Seção: Como chegar

- Crie uma seção com `id="como-chegar"`  
- Explique como chegar ao local  
- Adicione um **link externo** para o Google Maps (abra em nova aba com `target="_blank"`)

---

### ✅ Parte 4 – Seção: Galeria

- Crie uma seção com `id="galeria"`  
- Adicione **duas imagens** do local:
  - Tamanho: `width="300"`  
  - Texto alternativo (`alt`)  
  - Cada imagem deve ser **um link clicável** que leva para uma versão maior ou para uma galeria online

---

### ✅ Parte 5 – Seção: Contato

- Crie uma seção com `id="contato"`  
- Adicione a frase:  
  **“Para saber mais, visite nosso perfil no Instagram.”**  
- Transforme o trecho **"nosso perfil no Instagram"** em um link para `https://instagram.com/ilha.do.sol` (em nova aba)

---

### ✅ Parte 6 – Voltar ao topo

- No final da página, crie um link com o texto:  
  **"Voltar ao topo"**, que leve o usuário ao topo da página usando âncora

---

## ⒸⓈⓈ - Estilização

- Utilize as boas práticas de utilização da estilização resetando básicamente a página.
- Modifique a fonte padrão de toda a página, para a seguinte sequência: Arial, Verdana, sans-serif.
- Estilizar todos os títulos da página, centralizando seus textos.
- Utilize classes e ids como seletores para elementos únicos, utilize a herança para aplicar estilos especificos.
- Utilize cores  em códigos como, hexa ou rgb.
- Crie comentários para separar as áreas dentro do arquivo css.


## 💾 Nome do Arquivo

`destino.html`

---