import Moises from "../../../public/Images/Moises.jpeg";
import Thiago from "../../../public/Images/Thiago.jpeg";
import Gabriel from "../../../public/Images/Gabriel.jpeg";
import { useEffect, useState } from "react";
import type { TipoUsuario } from "../../types/tipoUsuario";
import { Link } from "react-router-dom";

export default function Home(){

    const [usuario, setUsuario] = useState<TipoUsuario>();

    useEffect(() =>{
        const dadosSalvos = sessionStorage.getItem("usuario");
        if (dadosSalvos) {
            setUsuario(JSON.parse(dadosSalvos));
        }
    }, []);

    return( 
        <main className="flex flex-col text-center items-center">
            <div className="mx-10">
                <div className="my-10">
                    <h1 className="font-bold text-[1.2rem] my-10">Access Control</h1>
                    <p>Este é o nosso trabalho do CP 05 pt2 FrontEnd do segundo semestre, 1TDSPH.</p>
                </div>
                <div className="my-10">
                    <h1 className="font-bold text-[1.2rem] my-10">Integrantes</h1>
                    <div className="flex flex-wrap text-center flex flex-col items-center justify-center gap-5 lg:flex-row" >
                        <div className="items-center gap-5 justify-center text-white flex flex-col bg-blue-500 rounded-xl w-[65vw] h-[45vh] md:w-[45vw] md:h-[40vh] lg:w-[20vw] lg:h-[35vh]  xl:w-[20vw] xl:h-[40vh] 2xl:w-[13vw] 2xl:h-[35vh]">
                            <h2>Moisés Waidemann</h2> 
                            <img className="w-[30vw] rounded-xl shadow-2xl md:w-[20vw] lg:w-[13vw] 2xl:w-[9vw]" src={Moises} alt="Foto do integrante Moisés" />
                        </div>
                        <div className="items-center gap-5 justify-center text-white flex flex-col bg-blue-500 rounded-xl w-[65vw] h-[45vh] md:w-[45vw] md:h-[40vh] lg:w-[20vw] lg:h-[35vh] xl:w-[20vw] xl:h-[40vh] 2xl:w-[13vw] 2xl:h-[35vh]">
                            <h2>Gabriel Sbrana</h2>
                            <img className="w-[30vw] rounded-xl shadow-2xl md:w-[20vw] lg:w-[13vw] 2xl:w-[9vw]" src={Gabriel} alt="Foto do integrante Gabriel" />
                        </div>
                        <div className="items-center gap-5 justify-center text-white flex flex-col bg-blue-500 rounded-xl w-[65vw] h-[45vh] md:w-[45vw] md:h-[40vh] lg:w-[20vw] lg:h-[35vh] xl:w-[20vw] xl:h-[40vh] 2xl:w-[13vw] 2xl:h-[35vh]">
                            <h2>Thiago Mota</h2>
                            <img className="w-[30vw] rounded-xl shadow-2xl md:w-[20vw] lg:w-[13vw] 2xl:w-[9vw]" src={Thiago} alt="Foto do integrante Thiago"/>
                        </div>
                    </div>
                </div >
                {usuario ? (
                    <div className="my-20 flex flex-col items-center">
                        <h1 className="font-bold text-[1.2rem]">Informações da sua conta</h1>
                        <div className="w-[60vw]  h-[20vh] bg-blue-500 text-white text-[1.2rem] rounded-xl flex flex-col items-center my-5 2xl:w-[30vw] 2xl:h-[15vh]">
                            <p className="my-5 font-bold text-[1.2rem]">Nome</p>
                            <div className="w-[50vw]  h-[8vh] bg-white text-white rounded-xl flex items-center justify-center 2xl:w-[20vw] 2xl:h-[5vh]"><p className="text-[1rem] text-black">{usuario.nome}</p></div>
                        </div>
                        <div className="w-[60vw] h-[20vh] bg-blue-500 text-white text-[1.2rem] rounded-xl flex flex-col items-center my-5 2xl:w-[30vw]  2xl:h-[15vh] ">
                            <p className="my-5 font-bold text-[1.2rem]">Nome de usuário</p>
                            <div className="w-[50vw]  h-[8vh] bg-white text-white rounded-xl flex items-center justify-center 2xl:w-[20vw] 2xl:h-[5vh]"><p className="text-[1rem] text-black">{usuario.nomeUsuario}</p></div>
                        </div>
                        <div className="w-[60vw]  h-[20vh] bg-blue-500 text-white text-[1.2rem] rounded-xl flex flex-col items-center my-5 2xl:w-[30vw]  2xl:h-[15vh]">
                            <p className="my-5 font-bold text-[1.2rem]">Email</p>
                            <div className="w-[55vw] h-[8vh] bg-white text-white rounded-xl flex items-center justify-center 2xl:w-[20vw] 2xl:h-[5vh]"><p className="text-[1rem] text-black">{usuario.email}</p></div>
                        </div>
                    </div>
                ) : (
                <div className="my-20">
                    <h1 className="font-bold text-[1.2rem] my-10">Entre na sua conta ou faça cadastro</h1>
                    <div className=" flex felx-col justify-center gap-10">
                        <Link className="w-[30vw] hover:bg-blue-700 h-[5vh] bg-blue-500 text-white text-[1.2rem] rounded-xl flex items-center justify-center xl:w-[10vw] xl:h-[10vh] xl:text-[1.5rem]" to="/login">Login</Link>
                        <Link className="w-[30vw] hover:bg-blue-700 h-[5vh] bg-blue-500 text-white text-[1.2rem] rounded-xl flex items-center justify-center xl:w-[10vw] xl:h-[10vh] xl:text-[1.5rem]" to="/cadastro">Cadastro</Link>
                    </div>
                </div>)}
            </div>
        </main>
    );
}