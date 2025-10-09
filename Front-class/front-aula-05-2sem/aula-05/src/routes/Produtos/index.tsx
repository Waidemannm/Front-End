import { listaProdutos } from "./listaProdutos";
import { Link } from "react-router-dom";

export default function Produtos(){
    return(
        <main>
            <h1>Produto</h1>
            {
                listaProdutos.map(prod => (
                    <div key={prod.id}>
                        <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o produto: {prod.nome}
                        </Link>
                    </div>
                ))
            }
        </main>
    )
}