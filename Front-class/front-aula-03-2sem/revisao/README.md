# Projeto Base — Vite + React (TypeScript) com Exercícios

Bem-vindo! Este repositório é um ponto de partida para praticar React com Vite usando TypeScript. O foco é **mão na massa**: pequenos exercícios e evolução por etapas.

---

## ⚙️ Requisitos

* **Node.js** ≥ 18
* **npm** (ou **pnpm**/**yarn**)
* Editor com extensões para **ESLint** e **Prettier**

---

## 🚀 Começando

```bash
# 1) Crie o projeto
npm create vite@latest my-react-lab -- --template react-ts
cd my-react-lab

# 2) Instale dependências
npm install

# 3) (Opcional) Ferramentas úteis
npm i -D eslint prettier eslint-config-prettier eslint-plugin-react-hooks @types/react @types/react-dom

# 4) Rode em desenvolvimento
npm run dev

# 5) Build de produção
npm run build

# 6) Pré-visualização do build
npm run preview
```

---

## 🗂️ Estrutura sugerida

```
my-react-lab/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  └─ Button.tsx
│  ├─ hooks/
│  ├─ pages/
│  │  └─ Home.tsx
│  ├─ styles/
│  │  └─ globals.css
│  ├─ App.tsx
│  └─ main.tsx
├─ public/
├─ index.html
├─ package.json
└─ README.md
```

**Observações**

* Evite `React.FC`. Prefira funções tipadas nas props:

  ```tsx
  type ButtonProps = { label: string; onClick?: () => void };
  export function Button({ label, onClick }: ButtonProps) {
    return <button onClick={onClick}>{label}</button>;
  }
  ```
* Use caminhos relativos simples; se quiser *aliases*, configure `tsconfig.json` (`"baseUrl": "src"`).

---

## 🧩 Exercícios (nível crescente)

Cada exercício deve ter:

* Uma **issue** (ou checklist) aberta no repositório.
* Um **commit** por etapa com mensagem clara (ex.: `feat(button): add primary/secondary variants`).
* Ao final, um pequeno **README** na pasta do exercício (se houver) explicando sua solução.

### 1) Componentes e Props

* Crie um componente `Card` com título, descrição e botão.
* Permita personalizar o texto do botão via props.
* **Desafio**: suporte a `variant` (`'outlined' | 'filled'`).

### 2) Estado e Eventos

* Crie um contador (`Counter`) com **incrementar**, **decrementar** e **reset**.
* Bloqueie decremento abaixo de 0 (exiba aviso acessível).
* **Desafio**: adicione passo configurável (±1, ±5…).

### 3) Renderização de Listas

* Renderize uma lista de tarefas (array no estado).
* Permita **adicionar** e **remover** itens.
* **Desafio**: persistir em `localStorage`.

### 4) Formulários Controlados

* Crie um formulário de cadastro simples (nome, email).
* Validações básicas (campo obrigatório, email válido).
* **Desafio**: exibir mensagens de erro acessíveis com `aria-live`.

### 5) Efeitos e Fetch (API)

* Crie um `useEffect` para buscar dados públicos (ex.: `https://jsonplaceholder.typicode.com/users`).
* Mostre **loading** e **erro**.
* **Desafio**: filtro por nome (input controlado).

### 6) Composição e Reutilização

* Reaproveite `Card` para exibir os usuários buscados no exercício anterior.
* **Desafio**: crie um `Skeleton` para o estado de carregamento.

### 7) Hooks personalizados

* Crie `useLocalStorage<T>(key: string, initial: T)`.
* Reaplique no exercício 3 para salvar tarefas.
* **Desafio**: suporte a migração de versão do schema (ex.: `key@v2`).

### 8) Acessibilidade e Semântica

* Revise os componentes para:

  * contraste mínimo,
  * foco visível,
  * uso de elementos semânticos (`<main>`, `<header>`, `<nav>`, `<footer>`),
  * `alt` descritivo em imagens (quando não decorativas),
  * labels associados a inputs.
* **Desafio**: navegação apenas por teclado.

### 9) Testes (Vitest + Testing Library)

* Instale e configure:

  ```bash
  npm i -D vitest @testing-library/react @testing-library/user-event jsdom
  ```

  Em `vite.config.ts`:

  ```ts
  test: { environment: 'jsdom' }
  ```
* Crie testes para `Counter` e `Button`.
* **Desafio**: teste de acessibilidade básico (ex.: roles, labels).

### 10) Organização por Páginas (Opcional)

* Adicione **React Router**:

  ```bash
  npm i react-router-dom
  ```
* Crie `Home` e `About` e um menu para navegar.
* **Desafio**: rota dinâmica `/users/:id` reusando o fetch.

---

## ✅ Checklist de Entrega

* [ ] `npm run dev` funciona sem erros
* [ ] Padrões de commit consistentes
* [ ] Componentes reutilizáveis e tipados
* [ ] Acessibilidade básica aplicada
* [ ] Exercícios 1–7 concluídos (mínimo)
* [ ] Breve doc de cada exercício (o que foi feito, decisões, aprendizados)

---

## 🧭 Convenções de Código

* **Nomes**: `kebab-case` para arquivos, `PascalCase` para componentes.
* **Imports**: agrupe e ordene; evite imports não usados.
* **Estilo**: ESLint + Prettier; rode antes de commitar.
* **Tipos**: prefira **tipos explícitos** em props e retornos de hooks.

---

## 📦 Scripts úteis

```jsonc
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest --run",
    "test:ui": "vitest"
  }
}
```

---

## 📝 Critérios de Avaliação (sugestão)

* **Funcionalidade** (40%): requisitos dos exercícios atendidos.
* **Qualidade do código** (25%): legibilidade, organização, tipagem.
* **Acessibilidade/UX** (15%): navegação por teclado, labels, feedbacks.
* **Commits e documentação** (20%): histórico claro e mini-READMEs.

---

## 🔧 Dicas

* Quebre problemas grandes em componentes pequenos.
* Comece simples; só depois generalize.
* Use o DevTools do React e o console do navegador.
* Leia erros do TypeScript com calma: geralmente apontam o caminho.

---

## 📚 Referências rápidas

* Documentação React
* Guia Vite
* TypeScript Handbook
* Testing Library (React)

---

