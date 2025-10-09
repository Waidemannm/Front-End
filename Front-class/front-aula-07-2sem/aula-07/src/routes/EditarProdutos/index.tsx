import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { TipoProduto } from "../../types/tipoProduto";

export default function EditarProdutos(){
    //Executando uma desestruturação no rooks useParrams pra capturar o parametro vindo do componente produto
    const {id} = useParams<string>();
    const [produto, setProduto] = useState<TipoProduto>();

    useEffect(() =>{
        const fetchData  = async () =>{
            //Recebendo a lista de dado em formato JSON.
            const response = await fetch("http://localhost:3001/produtos");
            //Parsear os dados JSON para literal
            const data:TipoProduto[] = await response.json();
            //Procurar objeto atraves do ID
            const produtoFind:TipoProduto | undefined = data.find(p => p.id == Number(id));
            setProduto(produtoFind);
        }
        fetchData();
    },[id])
    

    return(
        <main>
            <h1>Editar os produtos</h1>
            <p>ID do Produto {id}</p>
            <div>
                <p>ID    : {produto?.id}</p>
                <p>Nome  : {produto?.nome}</p>
                <p>Preço : {produto?.preco}</p>
            </div>
        </main>
    );
}