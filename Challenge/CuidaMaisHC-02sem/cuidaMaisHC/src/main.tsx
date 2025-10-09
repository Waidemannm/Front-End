import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./globals.css";
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './routes/PagesObrigatorias/Error';
import Home from './routes/PagesObrigatorias/Home';
import Integrantes from './routes/PagesObrigatorias/Integrantes';
import FAQ from './routes/PagesObrigatorias/FAQ';
import Contato from './routes/PagesObrigatorias/Contato';
import Agendamento from './routes/PagesSolucao/Agendamento';
import Login from './routes/PagesSolucao/Login';
import Cadastro from './routes/PagesSolucao/Cadastro';
import LoginOrCreateAccount from './routes/PagesSolucao/LoginOrCreateAccount';
import Guia from './routes/PagesSolucao/Guia';
import IntegrantesDetails from './routes/PagesObrigatorias/IntegranteDetails';

const router = createBrowserRouter([
  {path:"/", element: <App/>, errorElement: <Error/>, children:[
    {path:"/", element:<Home/>},
    {path:"/integrantes", element: <Integrantes/>},
    {path:"/integrantes/:id", element: <IntegrantesDetails/>},
    {path:"/FAQ", element: <FAQ/>},
    {path:"/contato", element:<Contato/>},
    {path:"/agendamento", element:<Agendamento/>},
    {path:"/login-or-create-account", element: <LoginOrCreateAccount/>},
    {path:"/login-or-create-account/login/:cpf", element:<Login/>},
    {path:"/login-or-create-account/cadastro", element: <Cadastro/>},
    {path:"/guia", element:<Guia/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
