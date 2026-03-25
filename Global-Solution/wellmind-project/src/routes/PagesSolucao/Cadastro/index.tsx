import { useNavigate } from "react-router-dom";
import FormCadastro from "../../../components/FormCadastro/FormCadastro";
import { useForm } from "react-hook-form";
import type { tipoCadastro } from "../../../types/tipoForm/tipoCadastro";
import { useEffect, useState } from "react";
import type { TipoUsuario } from "../../../types/tipos/tipoUsuario";

const URL_API = import.meta.env.VITE_URL_API;

export default function Cadastro(){

    const [idDoUsuario, setIdUsuario] = useState<number | null>(null);
    const [usuarios, setUsuarios] = useState<TipoUsuario[]>([]);
    const usuarioSessionRaw = sessionStorage.getItem("usuario");
    const usuarioSession = usuarioSessionRaw ? JSON.parse(usuarioSessionRaw) : null;
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<tipoCadastro>();
    const [loading, setLoading] = useState(false);
    console.log(idDoUsuario, usuarios)

    const onSubmit =  handleSubmit(async (data) =>{
        setLoading(true);
        const dados = {
            email: data.email, 
            nome: data.nome,
            idade: Number(data.idade),
            genero: data.genero.toUpperCase()
        }; 
        await fetch(`${URL_API}/usuario`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        }); 
        const response = await fetch(`${URL_API}/usuario`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });
        const usuariosBanco: TipoUsuario[] = await response.json();
        const usuarioRegistrado = usuariosBanco.find((u: TipoUsuario) =>
            u.email.toLowerCase() === dados.email.toLowerCase()
        ); 
       
        if (!usuarioRegistrado) {
            console.error("Usuário não encontrado no banco!");
            alert("Erro ao registrar usuário. Tente novamente.");
            setLoading(false);
            return;
        }
        console.log("Usuário encontrado:", usuarioRegistrado);
        
        sessionStorage.setItem("usuario", JSON.stringify(usuarioRegistrado)); 
        alert("Cadastro feito com sucesso!");
        navigate("/");
        window.location.reload();
        setLoading(false);
    }); 
    
    useEffect(() => {
        const fetchData = async () => {
                try {
                    const response = await fetch(`${URL_API}/usuario`);
                    const usuarios: TipoUsuario[] = await response.json();
                    setUsuarios(usuarios);
                    const usuarioEncontrado = usuarios.find(
                        (u) => u.email.toLowerCase() === usuarioSession.email.toLowerCase()
                    );
    
                    if (usuarioEncontrado) {
                        setIdUsuario(usuarioEncontrado.idUsuario);
                    }
                } catch (error) {
                    console.error("Erro ao buscar usuários:", error);
                }
            };
            fetchData();
        }, []);

    return(
        <main className="mt-105 lg:mt-60 flex flex-col items-center text-[var(--color-font-black)] font-bold text-[1.2rem]">
            {
                loading 
                ? <p className="text-[var(--color-font-black)] m-5">Cadastrando usuário...</p>
                : <>
                    <h1>Cadastro</h1>
                    <p className="text-center text-[var(--color-font-black)] m-5">Você não possui cadastro, cadastre-se agora</p>
                    <FormCadastro
                        register={register}
                        onSubmit={onSubmit}
                    />
                  </>
            }
        </main>
    );
}
