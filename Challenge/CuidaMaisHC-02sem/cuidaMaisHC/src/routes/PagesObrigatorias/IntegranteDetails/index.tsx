import { useEffect, useState } from "react";
import { useParams, Link  } from "react-router-dom";
import type { TipoIntegrante } from "../../../types/Integrantes/tipoIntegrante";
import { FaGithub, FaLinkedin} from "react-icons/fa";

export default function IntegrantesDetails(){
    const {id} = useParams<string>();

    const [integrante, setIntegrante] = useState<TipoIntegrante>();

    useEffect(()=> {
        const fetchdata = async()=>{
            const response = await fetch(`http://localhost:3001/integrantes/${id}`);
            const data: TipoIntegrante = await response.json();
            setIntegrante(data);
        }
        fetchdata();
    });
    return(
        <main className="pageDetails">
            <h1 className="text">Detalhes do {integrante?.nome}</h1>
            <div>
                <div className="detailIntegrante">
                    <img className="imgIntegrantes" src={integrante?.urlImg} alt={`Imagem do ${integrante?.nome}`} />
                    <p>{integrante?.paragrafo}</p>
                    <div className="btnIntegrantes">
                        <Link className="btnGit" target="_blank" rel="noopner noreferrer" to={`${integrante?.urlGit}`}><FaGithub/></Link>
                        <Link className="btnlinkedIn" target="_blank" rel="noopner noreferrer" to={`${integrante?.urlLinkedIn}`}><FaLinkedin/></Link>  
                    </div>
                </div>
            </div>
        </main>
    );
}