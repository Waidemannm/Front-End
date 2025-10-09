# 🧠 Revisão de JavaScript

Este repositório contém uma revisão completa dos principais conceitos de JavaScript abordados nas aulas da FIAP, com foco em operadores, tipos de dados, objetos, arrays e operadores especiais como spread e destructuring.

---

## 📌 Conteúdo Programático

### ➕ Operadores Aritméticos
- Realizam cálculos matemáticos simples.
- Operandos: valores numéricos (variáveis ou literais).
- Operadores: `+`, `-`, `*`, `/`, `%`.
- Ordem de precedência influencia o resultado final.

### 🔠 Tipos de Dados
- **Primitivos**: `string`, `number`, `boolean`, `undefined`, `null`, `bigint`.
- **Referência**: `object`, `array`, `function`.
- **Dinamicamente tipado**: uma mesma variável pode mudar de tipo.

### 📚 Strings
- Definidas com aspas simples ou duplas.
- Concatenadas com `+` ou template literals:  
  ```js
  `Meu nome é ${nome}`
  ```

### 🔢 Números e BigInt
- Todos os números são ponto flutuante por padrão.
- BigInt usado para representar inteiros muito grandes.

### ✅ Booleanos
- Valores: `true` ou `false`.
- Usado em comparações e estruturas condicionais.

---

## 📦 Objetos
- Estrutura de dados baseada em pares **chave-valor**.
- Valores podem ser de qualquer tipo, incluindo funções (métodos).
- Permitem armazenar dados relacionados de forma organizada.

```js
const aluno = {
  nome: "Maria",
  idade: 22,
  saudacao() {
    return `Olá, ${this.nome}`;
  }
};
```

---

## 📋 Arrays
- Lista ordenada de valores indexados a partir do 0.
- Métodos comuns:
  - `push()`, `pop()`, `shift()`, `unshift()`, `splice()`
  - `sort()`, `reverse()`, `includes()`, `find()`
  - `map()`, `filter()`, `reduce()`, `some()`, `every()`

---

## 🚀 Operadores Especiais

### Spread (`...`)
- Expande elementos de um array ou objeto.
```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3]; // [1, 2, 3]
```

- Em objetos:
```js
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
```

### Rest (`...`)
- Agrupa os "restantes" valores:
```js
const { id, ...resto } = cliente;
```

### Destructuring
- Extrai valores diretamente de objetos ou arrays:
```js
const { nome, idade } = pessoa;
```

---

## 🧪 Exercícios Propostos

### `tipos.js`
1. Manipulação de strings e números com template literal.
2. Operações aritméticas com duas variáveis.
3. Comparações booleanas (`==`, `===`, `>`, `<`, etc.).
4. Arrays: adicionar, remover, ordenar.
5. Objetos: adicionar e acessar propriedades dinamicamente.

### `exercicio-01-arrays`
- Criar lista de nomes com formulários e métodos:
  - `push()`, `sort()`, `reverse()`

### `exercicio-02-arrays`
- Adição de nomes + botão de remoção com `splice()`

### `exercicio-03-arrays`
- Aumento salarial com `map()`
- Filtro de salários > 2500 com `filter()`
- Soma total com `reduce()`

### `exercicio-04-arrays`
- Lista de tarefas (objetos com atributos)
- Ações: adicionar, excluir, ordenar por importância, adicionar valor ou duração

---

## 📂 Organização Recomendada

```
revisao-js/
├── tipos.html
├── tipos.js
├── exercicio-01-arrays/
│   └── index.html
├── exercicio-02-arrays/
│   └── index.html
├── exercicio-03-arrays/
│   └── index.html
├── exercicio-04-arrays/
│   └── index.html
└── README.md
```

---

## 👨‍🏫 Professores

- Prof. Luís Carlos – lsilva@fiap.com.br  
- Prof. Alexandre Carlos – profalexandre.jesus@fiap.com.br  
- Prof. Wellington Cidade – profwellington.tenorio@fiap.com.br  

---

## ⚠️ Observações
- Cópia superficial com `spread` pode causar efeitos colaterais com objetos aninhados.
- Pratique sempre utilizando boas práticas e versionamento com Git/GitHub.

---

## 💻 Licença
Uso exclusivo para fins educacionais na FIAP. Todos os direitos reservados aos autores.
