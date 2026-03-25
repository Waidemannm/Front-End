import { useNavigate } from "react-router-dom";
import FormloginOrCreateAccount from "../../../components/FormLoginOrCreateAccont/FormLoginOrCreateAccont";
import { useForm } from "react-hook-form";
import type { tipoLoginOrCreateAccount } from "../../../types/tipoForm/tipoLoginOrCreateAccount";
import { useState } from "react";
import type { TipoUsuario } from "../../../types/tipos/tipoUsuario";

const URL_API = import.meta.env.VITE_URL_API;

export default function LoginOrCreateAccount() {    
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<tipoLoginOrCreateAccount>();
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL_API}/usuario`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }, 
      });
      const usuarios: TipoUsuario[] = await response.json();
      const usuariosEncontrados = usuarios.filter((u) => u.email === data.email);
      if (usuariosEncontrados.length > 0) {
        navigate(`/login-or-create-account/login/${data.email}`);
      } else {
        navigate("/login-or-create-account/cadastro");
      }
    } catch (error) {
      console.error("Erro ao procurar email:", error);
      alert("Erro ao procurar email.");
    } finally {
      setLoading(false);
    }
  });

  return ( 
    <main className="mt-105 lg:mt-70 flex flex-col items-center text-[var(--color-font-black)] font-bold text-[1.2rem]">
      <h1>Entre ou crie uma conta</h1>
      {loading ? (
        <p className="text-[var(--color-font-black)] m-10">Verificando Email...</p>
      ) : (
        <FormloginOrCreateAccount
          register={register}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
}
