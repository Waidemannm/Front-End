import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { TipoMc } from "../../types/tipoMc";

export default function ProdutoDetail(){

    const {id} = useParams<string>();

    const [produto, setProduto] = useState<TipoMc>();

    useEffect(()=> {
        const fetchdata = async()=>{
            const response = await fetch(`http://localhost:3001/produtos/${id}`);
            const data: TipoMc = await response.json();
            setProduto(data);
        }
        fetchdata();
    });


    return(
        <main>
            <h1 className="text">Detalhes do {produto?.nome}</h1>
            <div className="pageDetails">
                <div className="details">
                    <img className="imgDetails" src={produto?.urlImg} alt={`Imagem do ${produto?.nome}`} />
                    <p>{produto?.nome}</p>
                    <p>R${produto?.preco}</p>
                    <p>Id: {produto?.id}</p>
                </div>
            </div>
        </main>
    );
}