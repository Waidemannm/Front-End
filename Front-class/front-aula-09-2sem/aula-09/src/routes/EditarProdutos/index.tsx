import { useParams } from "react-router-dom";
import type { TipoProduto } from "../../types/tipoProduto";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";

export default function EditarProdutos(){

    //Executando uma desestruturação no rook useParams() para capturar o parâmetro
    // vindo do componente Produto.
    const { id } = useParams<string>();

    const [produto, setProduto] = useState<TipoProduto>()

    //Tranforme a recuperação do objeto  direto da API e não da lista mocada...

    useEffect(()=>{

        const fetchData = async ()=>{
            //Recebendo a lista de dado em formato JSON.
            const response = await fetch("http://localhost:3001/produtos");
            //Parsear os dados de json para literal
            const data:TipoProduto[] = await response.json();
            //Procurar o objeto na lista(data) comparando o id que chegou de produtos com o id de data.
            const produtoFind:TipoProduto | undefined = data.find(p => p.id == Number(id));

            setProduto(produtoFind);
        }

        fetchData();
    },[id]);
    
    return(
        <main>
            <h1>Editar os produtos</h1>
            <div>
                <p>ID    : {produto?.id}</p>
                <p>Nome  : {produto?.nome}</p>
                <p>Preço : R$ {produto?.preco}</p>
                <img src={produto?.urlAvatar} alt="Icone do produto" />
            </div>

            <div>
                
            </div>
        </main>
    );
}