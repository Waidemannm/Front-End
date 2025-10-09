import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { TipoUsuario } from "../../types/tipoUsuario";

export default function Menu(){

    const [usuario, setUsuario] = useState<TipoUsuario>();

    useEffect(() =>{
        const dadosSalvos = sessionStorage.getItem("usuario");
        if (dadosSalvos) {
            setUsuario(JSON.parse(dadosSalvos));
        }
    }, []);
    
    return(
        <nav className="flex flex-col gap-3 text-center lg:flex-row items-center">
            {usuario? (<h1 className="text-[1rem] font-bold ">Olá, {usuario.nomeUsuario}! </h1>) : (<Link  className=" hover:bg-blue-700 bg-blue-300 rounded-xl flex items-center justify-center text-[1.2rem] text-white font-bold h-[5vh] w-[30vw] xl:w-[10vw] xl:h-[7vh] xl:text-[1.5rem]" to="/login">Login</Link>)}

            <Link className="hover:bg-blue-700 bg-blue-300 rounded-xl flex items-center justify-center text-[1.2rem] text-white font-bold h-[5vh] w-[30vw] xl:w-[10vw] xl:h-[7vh] xl:text-[1.5rem]" to="/">Home</Link>
        </nav>
    );
}