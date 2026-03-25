import { useEffect, useState } from "react";
import type { TipoUsuario } from "../../types/tipos/tipoUsuario";
import { Link, useLocation } from "react-router-dom";

export default function Menu(){

    const [usuario, setUsuario] = useState<TipoUsuario>();

    useEffect(() =>{
        const dadosSalvos = sessionStorage.getItem("usuario");
        if (dadosSalvos) {
            setUsuario(JSON.parse(dadosSalvos));
        }
    }, []);

    const location = useLocation();

    return(
        <div>
            {usuario? (
                <div className="text-white flex flex-col gap-5 items-center justify-center lg:flex-row lg:bg-[var(--bg-rodape)] lg:p-2 lg:rounded-full">
                    <Link to="/"  className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`}>Home</Link>
                    <Link className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/integrantes' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`} to="/integrantes">Integrantes</Link>
                    <Link className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/about' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`} to="/about">Sobre</Link>
                    <Link className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/faq' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`} to="/faq">Dúvidas</Link>
                    <Link className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/perguntas' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`} to="/perguntas">Formulário</Link>
                </div>
            ) : (
                <div className="text-white flex flex-col gap-5 items-center justify-center lg:flex-row lg:bg-[var(--bg-rodape)] lg:p-2 lg:rounded-full">
                    <Link to="/"  className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`}>Home</Link>
                    <Link className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/integrantes' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`} to="/integrantes">Integrantes</Link>
                    <Link className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/about' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`} to="/about">Sobre</Link>
                    <Link className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/faq' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`} to="/faq">Dúvidas</Link>
                    <Link className={`lg:w-[10rem] hover:bg-white hover:text-[var(--bg-rodape)] p-5 transition-all duration-300 flex items-center justify-center font-bold rounded-full w-[50vw] h-[6vh] flex justify-center items-center transition-all duration-300 ${location.pathname === '/login-or-create-account' ? 'bg-[var(--color-font-purple)] shadow-lg' : 'bg-[var(--bg-rodape)]'}`} to="/login-or-create-account">Entrar</Link>
                </div>
            )   
            }
        </div>
    )
} 