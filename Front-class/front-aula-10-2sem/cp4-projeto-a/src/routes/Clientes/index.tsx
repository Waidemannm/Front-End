import { useEffect, useState } from "react";
import type { TipoCliente } from "../../types/tipoCliente";
import { listaClientes } from "../../data/listaClientes";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

export default function Clientes() {

        const [clientes, setClientes] = useState<TipoCliente[]>([]);

        useEffect(()=>{
            setClientes(listaClientes); 
        },[]);
 

    return (
        <main>
            <h1>Clientes</h1>

            {clientes.map( (c)=>(
                <Link to={`/detalhes/clientes/${c.id}`} style={{textDecoration:"none",color:"#000"}}>
                    <Card nomeProps={c.nome} emailProps={c.email} telProps={c.telefone} imgProps={c.imagem}/>
                </Link>

            ))}

        </main>
    );
}