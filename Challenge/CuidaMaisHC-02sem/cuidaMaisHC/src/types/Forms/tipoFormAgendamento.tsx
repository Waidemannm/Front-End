import type { UseFormRegister } from "react-hook-form";
import type { tipoAgendamento } from "../tipoForm/tipoAgendamento";

export type tipoFormAgendamento ={
    register: UseFormRegister<tipoAgendamento>;
        onSubmit: () => void;  
}