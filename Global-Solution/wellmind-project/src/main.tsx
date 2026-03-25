import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./globals.css";
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./globals.css";
import Error from './routes/PagesObrigatorias/Error';
import Home from './routes/PagesObrigatorias/Home';
import Integrantes from './routes/PagesObrigatorias/Integrantes';
import IntegrantesDetails from './routes/PagesObrigatorias/IntegranteDetails';
import LoginOrCreateAccount from './routes/PagesSolucao/LoginOrCreateAccount';
import Login from './routes/PagesSolucao/Login';
import Cadastro from './routes/PagesSolucao/Cadastro';
import Perguntas from './routes/PagesSolucao/Perguntas';
import About from './routes/PagesObrigatorias/About';
import FAQ from './routes/PagesObrigatorias/FAQ';
import Feedback from './routes/PagesSolucao/Feedback';


const router = createBrowserRouter([
    {path: "/", element: <App/>, errorElement: <Error/>, children: [
        {path: "/", element:<Home/> },
        {path:"/integrantes", element: <Integrantes/>},
        {path:"/integrantes/:id", element: <IntegrantesDetails/>},
        {path:"/login-or-create-account", element: <LoginOrCreateAccount/>},
        {path:"/login-or-create-account/login/:email", element:<Login/>},
        {path:"/login-or-create-account/cadastro", element: <Cadastro/>},
        {path:"/perguntas", element: <Perguntas/>},
        {path:"/about", element: <About/>},
        {path: "/feedback", element: <Feedback/>},
        {path:"/faq", element: <FAQ/>}
    ]},
], {basename: import.meta.env.VITE_BASE_URL});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)