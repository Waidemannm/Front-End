import { FaGooglePlay, FaAppStore, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Rodape(){
    return(
        <footer>
            <p>&copy; 2025 Cuida Mais HC - Todos os direitos reservados</p>
            <h1>Contato</h1>
            <div>
                <p className="div">
                    <Link target="_blank" rel="noopner noreferrer" to="https://web.facebook.com/hospitaldasclinicasdafmusp"><FaFacebook /></Link> |
                    <Link target="_blank" rel="noopner noreferrer" to="https://www.instagram.com/hospitalhcfmusp/"><FaInstagram/></Link> |
                    <Link target="_blank" rel="noopner noreferrer"  to="https://www.youtube.com/@hospitaldasclinicasdafmusp3623"><FaYoutube /></Link> |
                    <Link target="_blank" rel="noopner noreferrer" to="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente"><FaGooglePlay/> </Link> |
                    <Link target="_blank" rel="noopner noreferrer" to="https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502"><FaAppStore/> </Link>
                </p>
            </div>
        </footer>
    );
} 