import Menu from "../Menu/Menu";
import { Link, useLocation, useParams } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import logo from "../../Images/ImgCabecalho/wellmind-logo.png";

export default function Cabecalho(){
    const {id} = useParams<string>();
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isIntegrantesDetails = location.pathname.startsWith("/integrantes/") && id;
    return(
        <header className="w-[100vw] flex flex-col bg-white fixed shadow-lg lg:h-[20vh]">
            <div className="flex flex-row p-5 gap-5 justify-center lg:items-center lg:justify-center xl:mx-20 xl:h-[20vh]">
                {isIntegrantesDetails ? (<Link className="lg:hidden w-[15vw] md:w-[13.5vw] lg:w-[10vw] bg-[var(--bg-rodape)] p-2 h-[2rem] rounded-full text-white hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center md:text-[1.5rem]" to="/integrantes"><FiArrowLeft /></Link>) : !isHome ? (<Link className="lg:hidden w-[15vw] md:w-[13.5vw] lg:w-[10vw] bg-[var(--bg-rodape)] p-2  h-[2rem] rounded-full text-white hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center md:text-[1.5rem] xl:h-[7vh] xl:text-[2rem]" to="/"><FiArrowLeft /></Link>) : (<div className="lg:hidden w-[15vw] md:w-[13.5vw] lg:w-[10vw]"></div>)}

                <Menu/>

                <Link to="/"><img className="w-[15vw] md:w-[13.5vw] lg:w-[10vw]" src={logo} alt="Imagem do Logo do WellMind Bem-estar"/></Link>
            </div>
        </header>
    );
} 