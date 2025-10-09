import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link> 
            <Link to="/card">Cards</Link> 
            <Link to="/git-users">Git Usuários</Link>
            <Link to="/cadProduto">Cadastro</Link>
        </nav>
    );
}