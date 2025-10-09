import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";

import { listaProdutos } from "../../data/listaProdutos";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link } from "react-router-dom";

export default function CardProduto(){

    const [produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(() =>{
        setProdutos(listaProdutos)
    }, []);


    return(
        <main>
            <div className="flex flex-wrap w-[100vw] m-auto overflow-aut">
                {produtos.map((p)=>(
                /*<Cards nome={p.nome} preco={p.preco} id={p.id} imagem={p.urlAvatar}/> */
                    <Link to={`/editar/produtos/${p.id}`}>
                        <Cards produto={p}/>
                    </Link>
            ))}
            </div>
        </main>
    );
} 