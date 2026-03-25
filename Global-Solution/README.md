WellMind – Plataforma de Bem-Estar Inteligente
🧠 Título e Descrição

WellMind é uma plataforma inteligente de autocuidado que utiliza IA generativa para analisar diariamente informações do usuário sobre sono, humor, hidratação, alimentação, foco, estresse e bem-estar geral. A solução retorna feedbacks personalizados, ajudando o usuário a criar uma rotina mais saudável e equilibrada.

📌 Status do Projeto

✔ Finalizado

📚 Sobre o Projeto

A WellMind foi criada para auxiliar pessoas no desenvolvimento de hábitos saudáveis por meio de um questionário diário simples. As respostas são enviadas para um modelo de IA que realiza uma análise contextual e gera recomendações personalizadas para melhorar sono, humor, hidratação e demais indicadores de bem-estar.

🛠 Tecnologias Utilizadas

Frontend: React, Vite e TypeScript

Backend: Java, Render e Quarkus

Banco de Dados: Oracle SQL (Developer e Data Modeler)

Versionamento: Git + GitHub

⚙ Instalação
# Clone o repositório
git clone https://github.com/WellMind-Bem-estar-Inteligente/WellMind
# Entre na pasta
cd wellmind

# Instale as dependências
npm install

# Inicie o projeto
npm start

🚀 Como Usar

Preencha o questionário diário sobre seus hábitos.

Os dados são enviados para o mecanismo de IA.

A plataforma retorna um feedback personalizado com recomendações de saúde e bem-estar.

O usuário pode acompanhar sua evolução ao longo dos dias.

🗂 Estrutura de Pastas
wellmind-project/
└── src/
├── components/
│ ├── Cabecalho/
│ ├── CardIntegrante/
│ ├── FormCadastro/
│ ├── FormLogin/
│ ├── FormLoginOrCreateAccont/
│ ├── FormPerguntas/
│ ├── Menu/
│ └── Rodape/
│
├── data/
│
├── Images/
│
├── routes/
│ ├── PagesObrigatorias/
│ └── PagesSolucao/
│
├── types/
│
├── App.tsx
├── globals.css
├── main.tsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
│   README.md

🌐 Endpoints ou Rotas Principais

POST /api/respostas
Envia as respostas do questionário diário.

GET /api/feedback/:idUser
Retorna o feedback gerado pela IA com base nas respostas enviadas.

GET /api/perguntas
Retorna a lista de perguntas do dia.

👨‍💻 Autores e Créditos

Moisés Waidemann Molinillo Júnior

Thiago Rodrigues da Mota

Gabriel Sbrana Campos

📞 Contato

📧 Email: thiago_mota123@hotmail.com
          sbranaww@gmail.com
          jrmolinillo12@gmail.com

🌐 Site: https://wellmind-liart.vercel.app/

GitHub: https://github.com/WellMind-Bem-estar-Inteligente/WellMind

🔗 Links
📌 Repositório no GitHub

https://github.com/WellMind-Bem-estar-Inteligente/WellMind

Link Deploy: [[https://wellmind-liart.vercel.app/](https://wellmind-project-ten.vercel.app/)](https://wellmind-project-ten.vercel.app/)



