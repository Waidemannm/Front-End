import { useParams, Link  } from "react-router-dom";
import type { TipoIntegrante } from "../../../types/tipos/tipoIntegrante";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {integrantes} from "../../../data/integrantes";

export default function IntegrantesDetails(){ 
    const {id} = useParams<string>();

    const integrante: TipoIntegrante[] = integrantes.filter(i => i.id === Number(id));
    const encontrado = integrante[0];
    
    return(
        <main className="flex flex-col text-center mt-50  md:mt-60  xl:mt-60">
            <h1 className="font-bold text-[1.2rem] text-[var(--color-font-purple)] m-[6vw] lg:m-0">Detalhes do {encontrado.nome}</h1>
            <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center gap-[10vw] items-center shadow-2xl w-[80vw] lg:w-[40vw] h-[80vh] lg:h-[80vh] rounded-2xl p-8 gap-6 m-10 lg:gap-[5vw] xl:w-[40vw] h-[80vh] xl:h-[50vh xl:gap-[2vw] md:mt-0">
                    <img className="w-[30vw] h-auto max-h-[35vh] lg:w-[15vw] xl:w-[10vw] rounded-lg object-contain" src={encontrado.urlImg} alt={`Imagem do ${encontrado.nome}`} />
                    <p>{encontrado.paragrafo}</p>
                    <div className="flex flex-wrap gap-[10vw] lg:gap-[5vw]">
                        <Link className="flex flex-wrap items-center justify-center bg-[var(--color-font-purple)] w-[20vw] h-[5vh]  text-[1.2rem] lg:w-[10vw] lg:h-[5vh] text-center text-white font-bold rounded-full shadow-2xl" target="_blank" rel="noopner noreferrer" to={`${encontrado.urlGit}`}><FaGithub/></Link>
                        <Link className="flex flex-wrap items-center justify-center bg-[var(--color-font-purple)] w-[20vw] h-[5vh] text-[1.2rem] lg:w-[10vw] lg:h-[5vh] text-center text-white font-bold rounded-full shadow-2xl" target="_blank" rel="noopner noreferrer" to={`${encontrado.urlLinkedIn}`}><FaLinkedin/></Link>  
                    </div>
                </div>
            </div>
        </main>
    );
}