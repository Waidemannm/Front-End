# README — Vite + React + TypeScript  
## Props • react-router-dom • `useParams` • `useNavigate` • `useState` • `useEffect`

Este guia ensina, **na prática**, como criar um SPA com Vite+React+TS e aplicar:
- **Props** para componentização,
- **React Router (v6+)** para navegação,
- **`useParams`** e **`useNavigate`**,
- **`useState`** para estados locais,
- **`useEffect`** para efeitos colaterais (ex.: carregar dados).

No final há um **exercício completo** integrando tudo.

---

## 1) Pré-requisitos
- Node.js LTS (22+)
- npm

## 2) Criação e execução do projeto
```bash
# 1) criar projeto

npm create vite@latest portal-pcd-react -- --template react-ts

# 2) entrar e instalar dependências
cd portal-pcd-react
npm i

# 3) instalar roteador
npm i react-router-dom

# 4) executar em modo de desenvolvimento
npm run dev
```

---

## 3) Conceitos e exemplos

### 3.1 Props (o que são e por que usar)
**Props** são dados passados de um componente **pai** para um **filho**. Elas tornam o componente **reutilizável** e **configurável**.

- **Importância:** evita duplicação de código, separa responsabilidades, melhora legibilidade e manutenção.
- **Dica TS:** tipar props com `type` ou `interface`.

**Exemplo — `ServiceCard` com props tipadas**
```tsx
// src/components/service-card.tsx
type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  onOpen?: (id: string) => void; // opcional
};

export default function ServiceCard({ id, title, description, onOpen }: ServiceCardProps) {
  return (
    <article className="border p-16 rounded-lg">
      <h3>{title}</h3>
      <p>{description}</p>
      {onOpen && (
        <button onClick={() => onOpen(id)}>Ver detalhes</button>
      )}
    </article>
  );
}
```

---

### 3.2 React Router (v7+) — navegação SPA
Permite trocar “páginas” sem recarregar o site. Componentes principais:
- `BrowserRouter`: provê o contexto de rotas.
- `Routes` / `Route`: definem o mapeamento **path → componente**.
- `Link` / `NavLink`: navegação declarativa.
- `useParams`: pega parâmetros da URL (ex.: `/servicos/:id`).
- `useNavigate`: navegação imperativa (ex.: redirecionar após enviar um formulário).

**Bootstrap do roteador**
```tsx
// src/main.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import EditarProduto from './routes/EditarProduto'
import Error from './routes/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProduto />
      }
    ]
  }
])

export default function Root() {
  return <RouterProvider router={router} />
}

```

**Definição de rotas**
```tsx
//App.jsx
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <Menu />
      <Outlet />
      <Rodape />
    </>
  )
}

export default App

//components/Menu.jsx
import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/produtos">Produtos</Link>
    </nav>
  )
}

//components/Rodape.jsx
export default function Rodape() {
  return (
    <footer>
      <p>Rodapé</p>
    </footer>
  )
}

//App.css
nav {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 8vh;
  background-color: royalblue;
}

nav a {
  color: white;
  font-size: 1.5em;
  padding: 15px;
}

main {
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

footer {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 5vh;
  background-color: darkblue;
  color: white;
}

```
---

### 3.3 `useParams` — ler parâmetros da URL
- **Importância:** URL significativa e *deep link*.

**Exemplo**
```tsx
// src/pages/service-detail.tsx
import { useParams, Link } from "react-router-dom";
import { getServiceById } from "../api/services";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? getServiceById(id) : null;

  if (!id || !service) {
    return (
      <>
        <p>Serviço não encontrado.</p>
        <Link to="/servicos">Voltar</Link>
      </>
    );
  }

  return (
    <section>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <Link to="/servicos">Voltar</Link>
    </section>
  );
}
```

---

### 3.4 `useNavigate` — navegação imperativa
- **Quando usar:** pós-ação (ex.: após `submit`, leve para “Obrigado” ou “Detalhes”).
- **Importância:** UX fluida e fluxos condicionais.

**Exemplo**
```tsx
// src/pages/contact.tsx
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // simular envio...
    setTimeout(() => {
      navigate("/"); // volta pra Home após “enviar”
    }, 400);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contato</h2>
      <label>
        E-mail
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Mensagem
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
```

---

### 3.5 `useState` — estados locais
Guarda valores que mudam ao longo do tempo (inputs, contadores, flags).

**Exemplo**
```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}
```

---

### 3.6 `useEffect` — efeitos colaterais
Executa código **após** a renderização: buscar dados, sincronizar título da página, timers, *subscriptions*.

**Exemplo**
```tsx
import { useEffect, useState } from "react";

export function ServicesLoader() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setTimeout(() => {
      if (active) {
        setData([{id:1,title:"Teste"}]);
        setLoading(false);
      }
    }, 300);
    return () => { active = false; };
  }, []);

  if (loading) return <p>Carregando…</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## 4) Exercício completo — Integração de todos os itens

### Objetivo
Construir uma SPA simples com:
- **Home** (texto e links),
- **Serviços** (lista vinda de `listServices()` – `useEffect` + `useState` + **props**),
- **Detalhe** do serviço (rota com **`useParams`**),
- **Contato** (formulário com **`useState`** e redirecionamento com **`useNavigate`**),
- Navegação com **react-router-dom**.

### Critérios de avaliação
- **Props** tipadas e reutilização de componentes (25%)
- **Rotas** configuradas corretamente e navegação funcional (25%)
- Uso adequado de **`useParams`** e **`useNavigate`** (20%)
- Gerenciamento de estado com **`useState`** e efeitos com **`useEffect`** (20%)
- Organização do código (10%)
