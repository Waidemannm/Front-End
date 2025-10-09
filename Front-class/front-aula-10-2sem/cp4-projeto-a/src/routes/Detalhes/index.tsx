import { useEffect, useState } from "react";
import type { TipoCliente } from "../../types/tipoCliente";
import { listaClientes } from "../../data/listaClientes";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function Detalhes() {

            const { id } = useParams<string>();

            const [cliente, setCliente] = useState<TipoCliente>();
    
            useEffect(()=>{
                
                const clienteEncontrado:TipoCliente | undefined = listaClientes.find( c => c.id.toString() === id);

                setCliente(clienteEncontrado);
                
            },[id]);


    return (
        <main>
            <h1>Detalhes</h1>
            {cliente ? <Card nomeProps={cliente.nome} emailProps={cliente.email} telProps={cliente.telefone} imgProps={cliente.imagem}/> : <p>Cliente não encontrado!</p>}
        </main>
    );
}