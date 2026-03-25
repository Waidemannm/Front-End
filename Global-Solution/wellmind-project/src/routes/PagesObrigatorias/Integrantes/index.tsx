import { Link } from "react-router-dom";
import CardIntegrantes from "../../../components/CardIntegrante/CardIntegrante";
import type { TipoIntegrante } from "../../../types/tipos/tipoIntegrante";
import {integrantes} from "../../../data/integrantes";

export default function Integrantes(){
    
    const todosIntegrante: TipoIntegrante[] = integrantes;

    return(
        <main className="text-center mt-95 flex flex-col items-center lg:mt-50">
            <h1 className="font-bold text-[1.2rem] text-[var(--color-font-purple)] text-center mt-5">Integrantes</h1>
            <div className="flex flex-col items-center text-center lg:flex lg:flex-row">{todosIntegrante.map((i) => (
                <Link to={`/integrantes/${i.id}`}>
                    <CardIntegrantes integrante={i}/>
                </Link>
            ))}
            </div>
            <p className="m-10">Clique no Card para ver detalhes dos integrantes da 1TDSPH</p>
        </main>
    );
} 
  