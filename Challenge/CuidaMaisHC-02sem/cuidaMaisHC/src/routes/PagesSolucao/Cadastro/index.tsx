import { useNavigate } from "react-router-dom";
import FormCadastro from "../../../components/FormCadastro/FormCadastro";
import { useForm } from "react-hook-form";
import type { tipoCadastro } from "../../../types/tipoForm/tipoCadastro";


export default function Cadasro(){

    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<tipoCadastro>();

    const onSubmit =  handleSubmit(async (data) =>{
        await fetch("http://localhost:3001/usuarios",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        alert("Cadastro feito com sucesso!");
        navigate("/");
    }); 
  
    return(
        <main className="pageCadastro">
            <h1>Cadastro</h1>
            <p>Você não possui cadastro, cadastre-se agora</p>
            <FormCadastro
                register={register}
                onSubmit={onSubmit}
            />
        </main>
    );
}