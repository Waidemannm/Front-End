import type { TipoIntegrante } from "../../types/tipos/tipoIntegrante";

export default function CardIntegrantes(props:{integrante:TipoIntegrante}){
    return(
        <div className="flex flex-col justify-center items-center shadow-2xl w-[50vw] md:w-[35vw] lg:w-[25vw] h-[40vh] md:h-[45vh] lg:h-[37vh] rounded-2xl m-5 lg:my-10 xl:my-20 bg-[var(--color-font-purple)] xl:gap-[2vw]">
            <h2 className="font-bold text-[1rem] text-white text-center">{props.integrante.nome}</h2>
            <img src={props.integrante.urlImg} alt="Foto do integrante" className="w-[30vw] lg:w-[15vw] xl:w-[10vw] h-auto max-h-[35vh] rounded-lg object-contain"/>
        </div>

    );
} 