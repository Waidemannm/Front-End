import Menu from "../Menu/Menu";
import logo from "../../../public/Images/ImgCabecalho/logohc.png"
import { Link, useLocation, useParams } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

export default function Cabecalho(){
    const {id} = useParams<string>();
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isIntegrantesDetails = location.pathname.startsWith("/integrantes/") && id;

    return(
        <header>
            <div className="tituloHeader">
                {isIntegrantesDetails ? (<Link className="return" to="/integrantes"><FiArrowLeft /></Link>) : !isHome ? (<Link className="return" to="/"><FiArrowLeft /></Link>) : (<div className="isHome"></div>)}
                <div>
                    <Link to="/"><img src={logo} alt="Imagem do Logo do Hospital das clínicas"/></Link>
                    <h1>Cuida Mais HC</h1>
                </div>
                <div className="w-7"></div>
            </div>
            <Menu/>
        </header>
    );
} 