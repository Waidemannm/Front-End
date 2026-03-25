import { useNavigate } from "react-router-dom";
import FormLogin from "../../../components/FormLogin/FormLogin";
import type { tipoLogin } from "../../../types/tipoForm/tipoLogin";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { TipoUsuario } from "../../../types/tipos/tipoUsuario";

const URL_API = import.meta.env.VITE_URL_API;

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<tipoLogin>();
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
      const usuariosEncontrados = usuarios.filter(
        (u) => u.email === data.email
      ); 

      if (usuariosEncontrados.length > 0) {
        alert("Login realizado com sucesso!");
        sessionStorage.setItem("usuario", JSON.stringify(usuariosEncontrados[0]));
        navigate("/");
        window.location.reload();
      } else {
        alert("Email ou nome incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao tentar logar.");
    } finally {
      setLoading(false);
    }
  });

  return (
    <main className="mt-105 lg:mt-60 flex flex-col items-center text-[var(--color-font-black)] font-bold text-[1.2rem]">
      <h1>Faça login na sua conta</h1>
      {loading ? (
        <p className="text-[var(--color-font-black)] m-10">Carregando login...</p>
      ) : (
        <FormLogin register={register} onSubmit={onSubmit} />
      )}
    </main>
  );
}
