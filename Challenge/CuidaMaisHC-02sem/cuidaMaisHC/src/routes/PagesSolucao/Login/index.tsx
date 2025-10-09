import { useNavigate, useParams } from "react-router-dom";
import FormLogin from "../../../components/FormLogin/FormLogin";
import type { tipoLogin } from "../../../types/tipoForm/tipoLogin";
import { useForm } from "react-hook-form";
import { useEffect } from "react";


export default function Login(){
    const { cpf } = useParams<{ cpf: string }>();
    const navigate = useNavigate();
    const {register, handleSubmit, setValue} = useForm<tipoLogin>();

    useEffect(() => {
      if (cpf) {
        setValue("cpf", cpf);
      }
    }, [cpf, setValue]);

    const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch(`http://localhost:3001/usuarios?cpf=${data.cpf}`);
      const usuarios = await response.json();

      if (usuarios.length === 0) {
        alert("CPF não encontrado!");
        return;
      }
      const usuario = usuarios[0];
      if (usuario.senha === data.senha) {
        alert("Login realizado com sucesso!");
        navigate("/");
      } else {
        alert("Senha incorreta.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao tentar logar.");
    }
  }); 
 

    return(
        <main className="pageLogin">
            <h1>Faça login na sua conta</h1>
            <FormLogin
            register={register}
            onSubmit={onSubmit}
            />
        </main>
    );
}