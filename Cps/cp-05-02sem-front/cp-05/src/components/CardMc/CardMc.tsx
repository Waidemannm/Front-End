import { CiEdit, CiTrash } from "react-icons/ci";
import type { TipoMc } from "../../types/tipoMc";
import { Link } from "react-router-dom";

export default function CardMc(props:{mc:TipoMc}){
    return(
        <div className="card">
            <img src={props.mc.urlImg} alt="Produto do McDonald's" className="imgCard"/>
            <h2>{props.mc.nome}</h2>
            <Link to={`/produtos/editar/${props.mc.id}`}><CiEdit size={29}/></Link>
            <Link to={`/produtos/apagar/${props.mc.id}`}><CiTrash size={29}/></Link>
        </div>
    );
}