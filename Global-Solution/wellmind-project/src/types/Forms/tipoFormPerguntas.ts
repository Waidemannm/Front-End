import type { UseFormRegister } from "react-hook-form";
import type { tipoPerguntas } from "../tipoForm/tipoPerguntas";

export type tipoPropsFormPerguntas = {
    register: UseFormRegister<tipoPerguntas>;
    onSubmit: () => void; 
}