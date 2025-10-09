import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inicio from './routes/Inicio/index.tsx';
import Clientes from './routes/Clientes/index.tsx';
import Detalhes from './routes/Detalhes/index.tsx';
import Error from './routes/Error/index.tsx';

const router = createBrowserRouter([
  {path:"/",element:<App/>,errorElement:<Error/>,children:[
    {path:"/",element:<Inicio/>},
    {path:"/clientes",element:<Clientes/>},
    {path:"/detalhes/clientes/:id",element:<Detalhes/>},
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
