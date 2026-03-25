import { useEffect, useState } from "react";
import FormPerguntas from "../../../components/FormPerguntas/FormPerguntas";
import { useForm } from "react-hook-form";
import type { tipoPerguntas } from "../../../types/tipoForm/tipoPerguntas";
import { useNavigate } from "react-router-dom";
import type { tipoHabito } from "../../../types/tipos/tipoHabito";
const URL_API = import.meta.env.VITE_URL_API; 

export default function Perguntas() {
    const usuarioSessionRaw = sessionStorage.getItem("usuario");
    const usuarioSession = usuarioSessionRaw ? JSON.parse(usuarioSessionRaw) : null;

    const idDoUsuario = usuarioSession?.idUsuario ?? null;

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<tipoPerguntas>();
    const [loading, setLoading] = useState(false);
    const [habitos, setHabitos] = useState<tipoHabito[]>([]);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch(`${URL_API}/habito`);
            const data: tipoHabito[] = await response.json();
            setHabitos(data);
        }
        fetchdata();
    }, []);

    function getHabitoId(tipo: string) { const habito = habitos.find(h => h.tipo.toUpperCase() === tipo.toUpperCase()); 
        return habito?.idHabito ?? null;
    }

    const onSubmit = handleSubmit(async (data) => {
        if (!idDoUsuario) {
            alert("Erro: usuário não encontrado. Faça login novamente.");
            return;
        }

        setLoading(true);

        const respostas = [
            { idUsuario: idDoUsuario, idHabito: getHabitoId("SONO"), resposta: Number(data.sono), observacoes: null },
            { idUsuario: idDoUsuario, idHabito: getHabitoId("HUMOR E ENERGIA"), resposta: Number(data.humor), observacoes: null },
            { idUsuario: idDoUsuario, idHabito: getHabitoId("ESTRESSE E FOCO"), resposta: Number(data.estresse), observacoes: null },
            { idUsuario: idDoUsuario, idHabito: getHabitoId("HIDRATAÇÃO"), resposta: Number(data.agua), observacoes: null },
            { idUsuario: idDoUsuario, idHabito: getHabitoId("ALIMENTAÇÃO"), resposta: Number(data.alimentacao), observacoes: null },
            { idUsuario: idDoUsuario, idHabito: getHabitoId("OBSERVAÇÕES"), resposta: null, observacoes: data.observacoes || null }
        ];

        console.log("JSON enviado:", respostas);
                
        for (const r of respostas) {
            await fetch(`${URL_API}/resposta_usuario`, {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(r)
            });
        }
        alert("Enviado com sucesso!");
        navigate("/feedback");
        setLoading(false);
        sessionStorage.setItem("respostasEncontradas", JSON.stringify(respostas));
    });

    return (
        <main className="mt-105 lg:mt-60 flex flex-col items-center text-[var(--color-font-black)] font-bold text-[1.2rem]">
            <h1>Questionário sobre saúde</h1>
            {loading ? (
                    <p className="text-[var(--color-font-black)] m-10">Enviando respostas...</p>
                  ) : (
                    <FormPerguntas register={register} onSubmit={onSubmit} />
                  )}
        </main>
    );
} 