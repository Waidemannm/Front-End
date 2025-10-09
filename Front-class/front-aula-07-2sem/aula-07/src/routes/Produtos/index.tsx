import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

export default function Produtos(){

    const [produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch("http://localhost:3001/produtos");
            const data = await response.json();

            setProdutos(data); 
            
        }
        fetchData();
    },[]);
  
    return(
        <main>
            <h1>Produtos</h1>
           
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                        <th>EDITAR</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td> <Link to={`/editar/produtos/${p.id}`}><CiEdit /></Link> </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>Total de produtos : {produtos.length}</td>
                    </tr>
                </tfoot>
            </table>

        </main>
    );
}