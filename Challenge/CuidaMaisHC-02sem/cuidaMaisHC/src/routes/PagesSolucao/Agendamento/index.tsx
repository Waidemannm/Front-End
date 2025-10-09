import { useNavigate } from "react-router-dom";
import FormAgendamento from "../../../components/FormAgendamento/FormAgendamento";
import { useForm } from "react-hook-form";
import type { tipoAgendamento } from "../../../types/tipoForm/tipoAgendamento";

export default function Agendamento(){

    const navigate = useNavigate(); 
    const { register, handleSubmit } = useForm<tipoAgendamento>();
    const onSubmit = handleSubmit (async (data) => {
        await fetch("http://localhost:3001/agendamentos", {
            method: "POST", 
            headers: {"Content-Type": "application/json"
            }, 
            body: JSON.stringify(data)
        });
        alert("Agendamento realizado com sucesso!");
        navigate("/");
    });

    return(
        <main className="pageAgendamento">
            <h1>Agendamento</h1>
            <FormAgendamento
                register={register}
                onSubmit={onSubmit}
            />

        </main>
    );
}