import { useNavigate } from "react-router-dom";
import FormloginOrCreateAccount from "../../../components/FormLoginOrCreateAccont/FormLoginOrCreateAccont";
import { useForm } from "react-hook-form";
import type { tipoLoginOrCreateAccount } from "../../../types/tipoForm/tipoLoginOrCreateAccount";


export default function LoginOrCreateAccount(){
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<tipoLoginOrCreateAccount>();
    const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch(`http://localhost:3001/usuarios?cpf=${data.cpf}`);
      const usuarios = await response.json();

      if (usuarios.length === 0) {
        navigate(`/login-or-create-account/cadastro`);

      }else if(usuarios.length > 0){
        navigate(`/login-or-create-account/login/${data.cpf}`);

      }
    } catch (error) {
      console.error("Erro ao procurar cpf:", error);
      alert("Erro ao procurar cpf.");
    }
  }); 

    return(
        <main className="pageLoginOrCreate">
            <h1>Entre ou crie uma conta</h1>
            <FormloginOrCreateAccount
            register={register}
            onSubmit={onSubmit}
            />
        </main>
    );
}