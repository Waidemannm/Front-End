import { useEffect, useState } from "react";
import type { TipoUsuario } from "../../../types/tipos/tipoUsuario";
import { Link } from "react-router-dom";
import { FaUserAlt, FaMobileAlt, FaRobot  } from "react-icons/fa";
import { MdElderly } from "react-icons/md";

export default function Home() {

    const[usuario, setUsuario] = useState<TipoUsuario>();
    useEffect(() =>{
        const dadosSalvos = sessionStorage.getItem("usuario");
        if (dadosSalvos) {
            setUsuario(JSON.parse(dadosSalvos));
        }
    }, []);

    return(
        <main className=""> 
            {usuario ? 
            (<div className="p-[5vw] text-left flex flex-col gap-2 m-6 text-center lg:px-40 lg:text-center 2xl:px-100">
                <h1 className="text-[var(--color-font-purple)] m-5 text-[1.2rem] font-bold text-center 2xl:text-[1.5rem]">Olá, {usuario.nome}</h1>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">
                    O <strong className="text-[var(--color-font-purple)]">WellMind</strong> nasceu para ser aquele companheiro diário que ajuda você a entender e melhorar seu bem-estar de um jeito leve e inteligente. 💜
                </p>
            </div>): (<div></div>)}
            <div className="my-16 mt-0 text-center p-10 flex flex-col text-[1.2rem] gap-5 items-center lg:flex-wrap">
                <h1 className="text-[1.2rem] text-[var(--color-font-purple)] font-bold text-center 2xl:text-[1.5rem]">Benefícios do WellMind</h1>

                <MdElderly className="text-[var(--color-blue-berry)] font-bold text-[2rem]"/>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">
                    Acompanhamento acessível para todas as idades
                </p>

                <FaRobot className="text-[var(--color-blue-berry)] font-bold text-[2rem]"/>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">
                    Feedback inteligente e personalizado com IA
                </p>

                <FaUserAlt className="text-[var(--color-blue-berry)] font-bold text-[2rem]"/>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">
                    Uso simples e intuitivo para qualquer pessoa
                </p>

                <FaMobileAlt className="text-[var(--color-blue-berry)] font-bold text-[2rem]"/>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">
                    Acesso rápido pelo celular ou navegador
                </p>
            </div>
            <div className="my-16 flex flex-col gap-2 m-6 text-center lg:px-40 lg:text-left 2xl:px-100">
                <h1 className="text-[1.2rem] text-[var(--color-font-purple)] font-bold text-center 2xl:text-[1.5rem]">Sobre o WellMind</h1>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">
                    O <strong className="text-[var(--color-font-purple)]">WellMind</strong> é uma plataforma que utiliza inteligência artificial para ajudar você a compreender seus hábitos e melhorar seu bem-estar de forma simples, humana e inteligente.
                </p>
            </div>
                <div className="my-16 flex flex-col m-6 gap-5 items-center lg:px-40 2xl:px-100 2xl:gap-8">
                <h1 className="text-[var(--color-font-purple)] text-[1.2rem] font-bold text-center 2xl:text-[1.5rem]">Integrantes</h1>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">O Cuida Mais HC foi produzido por <strong className="text-[var(--color-font-purple)]">Moisés Waidemann, Gabriel Sbrana e Thiago Mota</strong> da 1TDSPH. Acesse nossa página de integrantes para mais informações sobre.</p>
                <Link className="flex items-center justify-center bg-[var(--color-font-purple)] w-[40vw] h-[4vh] text-[1rem] text-center text-white font-bold rounded-2xl lg:w-[15vw] lg:h-[5vh] lg:text-[0.8rem] 2xl:text-[1rem]" to="/integrantes">Integrantes </Link>
            </div>
        </main>
    );
} 