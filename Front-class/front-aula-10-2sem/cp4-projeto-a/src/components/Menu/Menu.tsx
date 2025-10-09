import { Link } from "react-router-dom";

export default function Menu(){
  return(
    <nav>
      <Link to="/">Inicio</Link> |
      <Link to="/clientes">Clientes</Link>
    </nav>
  );
}