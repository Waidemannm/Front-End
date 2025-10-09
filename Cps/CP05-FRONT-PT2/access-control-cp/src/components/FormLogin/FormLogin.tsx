import { useForm } from "react-hook-form";
import { z } from "zod";
const URL_API = import.meta.env.VITE_API_URL_BASE;
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function FormLogin() {

    const navigate = useNavigate();

    const usuarioSchema = z.object({
        nomeUsuario: z.string().min(1, "O nome é obrigatório").max(100, "O nome deve ter no máximo 100 caracteres"),
        email: z.string().email("Informe um Email válido")
    });
    type UsuarioInput = z.infer<typeof usuarioSchema>;

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<UsuarioInput>({
        resolver: zodResolver(usuarioSchema), mode:"onSubmit"
    });

    const { nomeUsuario } = useParams<{ nomeUsuario: string }>();

    useEffect(() => {
      if (nomeUsuario) {
        setValue("nomeUsuario", nomeUsuario);
      }
    }, [nomeUsuario, setValue]);

    const onSubmit = handleSubmit(async (data: UsuarioInput) => {
        try{
            //No cadastro não permite cadastrar usuário com um nomeUsuario já existente na API
            const response = await fetch(`${URL_API}?nomeUsuario=${data.nomeUsuario}`);
            const usuarios = await response.json();

            if(usuarios.length === 0){
                alert("Nome de usuário não encontrado.")
                return
            }
            const usuario = usuarios[0]
            if (usuario.email === data.email) {
                alert("Login realizado com sucesso!");
                navigate("/");
                window.location.reload();
                sessionStorage.setItem("usuario", JSON.stringify(usuario));
            } else {
                alert("Email incorreto.");
            }


        }catch(error){
            alert("Erro ao fazer Login");
            console.error("Erro ao fazer Login:", error);
            navigate("/");
        }
    });

    return(
        <div className="flex flex-col items-center">
            <h1  className="font-bold text-[1.2rem] my-10">Login</h1>
            <form className="mb-10 flex flex-col items-center justify-center gap-5 border-2 rounded-xl w-[60vw] h-[35vh] p-5 bg-blue-100 xl:w-[30vw] xl:h-[40vh]" onSubmit={onSubmit}>
                <div className="flex flex-col">
                    <label className="font-bold text-blue-500 text-[1.2rem]">Nome de Usuário: </label>
                    <input className="bg-white rounded-xl p-2 h-[4vh] xl:w-[20vw]" type="text" {...register("nomeUsuario")} aria-invalid={!!errors.nomeUsuario} aria-describedby={errors.nomeUsuario ? "nomeUsuario-error" : undefined}/>
                    {errors.nomeUsuario && <p id="nomeUsuario-error" className="mt-1 text-sm text-red-500"> {errors.nomeUsuario?.message}</p>}
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-blue-500 text-[1.2rem]">Email: </label>
                    <input className="bg-white rounded-xl p-2 h-[4vh] xl:w-[20vw]" type="text" {...register("email")} aria-describedby={errors.email ? "email-error" : undefined}/>
                    {errors.email && <p id="email-error" className="mt-1 text-sm text-red-500"> {errors.email?.message}</p>}
                </div>
                <div>
                    <button className="mt-0  flex items-center justify-center bg-blue-500 w-[20vw] h-[5vh] text-[1.2rem] text-center text-white font-bold rounded-2xl xl:w-[10vw] xl:h-[7vh]" type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}