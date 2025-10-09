import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { TipoIntegrante } from "../../../types/Integrantes/tipoIntegrante";
import CardIntegrantes from "../../../components/CardIntegrante/CardIntegrante";


export default function Integrantes(){
    const{ id } = useParams<string>();
    const [integrantes, setIntegrantes] = useState<TipoIntegrante[]>([]);

    useEffect(() => {
        const fetchdata = async ()=>{
            const response = await fetch("http://localhost:3001/integrantes");
            const data: TipoIntegrante[] = await response.json();
            setIntegrantes(data);
        }
        fetchdata();
    }, [id]);

    return(
        <main className="pageIntegrante">
            <h1>Integrantes</h1>
            <div className="integrante">{integrantes.map((i) => (
                <Link to={`/integrantes/${i.id}`}>
                    <CardIntegrantes integrante={i}/>
                </Link>
            ))}
            </div>
            <p>Clique no Card para ver detalhes dos integrantes da 1TDSPH</p>
        </main>
    );
}
 