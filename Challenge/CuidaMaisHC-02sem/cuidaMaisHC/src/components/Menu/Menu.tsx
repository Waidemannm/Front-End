import { Link, useLocation } from "react-router-dom";

export default function Menu(){
  const location = useLocation(); /*Hook que possui um método que verificar se a localização atual página, ex:location.pathname === '/' verifica se a localizção da página é a '/', no caso a página HOME*/ 
    return(
        <div className="opcaosMenu">
          <Link className={`opcao ${location.pathname === '/' ? 'opcao-ativa' : ''}`} to="/">Home</Link>
          <Link className={`opcao ${location.pathname === '/FAQ' ? 'opcao-ativa' : ''}`}  to="/FAQ">Dúvidas Frequentes</Link>
          <Link className={`opcao ${location.pathname === '/contato' ? 'opcao-ativa' : ''}`} to="/contato">Contato</Link>
          <Link className={`opcao ${location.pathname === '/integrantes' ? 'opcao-ativa' : ''}`} to="/integrantes">Integrantes</Link>
          <Link className={`opcao ${location.pathname === '/agendamento' ? 'opcao-ativa' : ''}`} to="/agendamento">Agendamento</Link>
          <Link className={`opcao ${location.pathname === '/login-or-create-account' ? 'opcao-ativa' : ''}`} to="/login-or-create-account">Entrar</Link>
          <Link className={`opcao ${location.pathname === '/guia' ? 'opcao-ativa' : ''}`} to="/guia">Guia</Link> 
        </div>
    );
}