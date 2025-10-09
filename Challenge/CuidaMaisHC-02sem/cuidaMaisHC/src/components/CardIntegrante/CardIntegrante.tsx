import type { TipoIntegrante } from "../../types/Integrantes/tipoIntegrante";

export default function CardIntegrantes(props:{integrante:TipoIntegrante}){
    return(
        <div className="cardIntegrante">
            <h2>{props.integrante.nome}</h2>
            <img className="imgIntegrantes" src={props.integrante.urlImg} alt="Foto do integrante" />
        </div>
    );
}