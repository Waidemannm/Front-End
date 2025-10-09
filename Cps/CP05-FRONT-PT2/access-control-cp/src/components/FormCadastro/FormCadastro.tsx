import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
const URL_API = import.meta.env.VITE_API_URL_BASE;

export default function FormCadastro(){
 
    const navigate = useNavigate();

    const usuarioSchema = z.object({
        id: z.string().optional(),
        nome: z.string().min(3, "O nome deve ter mais que 2 caracteres").max(300, "O nome deve ter no máximo 300 caracteres"),
        nomeUsuario: z.string().min(1, "O nome de usuário é obrigatório").max(100, "O nome de usuário deve ter no máximo 100 caracteres"),
        email: z.string().email("Informe um Email válido")
    });

    type UsuarioInput = z.infer<typeof usuarioSchema>;

    const { register, handleSubmit, formState: { errors} } = useForm<UsuarioInput>({
            resolver: zodResolver(usuarioSchema), mode:"onSubmit"
        });

    const onSubmit =  handleSubmit(async (data) =>{
        try {
            const verificarEmail = async (email: string) => {
                try{
                    const response = await fetch(`${URL_API}?email=${email}`);
                    const usuarios = await response.json();
                    if (usuarios.length > 0) {
                        alert("Email já cadastrado.")
                        return true
                    }
                    return false
                }catch (error) {
                    console.error("Erro ao verificar email:", error);
                    return true
                }
            };

            const verificarNomeUsuario = async (nomeUsuario: string) => {
                try{
                    const response = await fetch(`${URL_API}?nomeUsuario=${nomeUsuario}`);
                    const usuarios = await response.json();
                    if (usuarios.length > 0) {
                        alert("Nome de usuário já cadastrado.")
                        return true
                    }
                    return false
                }catch (error) {
                    console.error("Erro ao verificar nome de usuário:", error);
                    return true
                }
            };

            const emailExiste = await verificarEmail(data.email);
            const nomeUsuarioExiste = await verificarNomeUsuario(data.nomeUsuario);

            if(!emailExiste && !nomeUsuarioExiste){
                await fetch(URL_API, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                alert("Cadastro feito com sucesso!");
                navigate("/");
                window.location.reload();
                sessionStorage.setItem("usuario", JSON.stringify(data));
                }
        } catch (error) {
            alert("Erro ao se cadastrar.");
            console.error("Erro ao se cadastrar:", error);
            navigate("/")
        }
    }); 

    return(
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-[1.2rem] my-10">Cadastro</h1>
            <form className="mb-10 flex flex-col items-center justify-center gap-5 border-2 text-center rounded-xl w-[60vw] h-[50vh] p-5 bg-blue-100 xl:w-[30vw] xl:h-[48vh]" onSubmit={onSubmit}>
                <input type="hidden" {...register("id")} />
                <div className="flex flex-col">
                    <label className="font-bold text-blue-500 text-[1.2rem]">Nome: </label>
                    <input className="bg-white rounded-xl p-2 h-[4vh] xl:w-[20vw]" type="text" {...register("nome")} aria-describedby={errors.nome ? "nome-error" : undefined}/>
                    {errors.nome && <p id="nome-error" className="mt-1 text-sm text-red-500"> {errors.nome?.message}</p>}
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-blue-500 text-[1.2rem]">Nome de Usuário: </label>
                    <input className="bg-white rounded-xl p-2 h-[4vh] xl:w-[20vw]" type="text" {...register("nomeUsuario")} aria-describedby={errors.nomeUsuario ? "nomeUsuario-error" : undefined}/>
                    {errors.nomeUsuario && <p id="nomeUsuario-error" className="mt-1 text-sm text-red-500"> {errors.nomeUsuario?.message}</p>}
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-blue-500 text-[1.2rem]">email: </label>
                    <input className="bg-white rounded-xl p-2 h-[4vh] xl:w-[20vw]" type="email" {...register("email")}  aria-describedby={errors.email ? "email-error" : undefined}/>
                    {errors.email && <p id="email-error" className="mt-1 text-sm text-red-500"> {errors.email?.message}</p>}
                </div>
                <div>
                    <button className="flex items-center justify-center bg-blue-500 w-[25vw] h-[5vh] text-[1.2rem] text-center text-white font-bold rounded-2xl xl:w-[10vw] xl:h-[7vh]" type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}