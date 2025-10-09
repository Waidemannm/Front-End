import type { UseFormRegister } from "react-hook-form";
import type { TipoMc } from "./tipoMc";

export type TipoPropsForm = { 
    register: UseFormRegister<TipoMc>;
    onSubmit: () => void;  
    isEditing?: boolean;
}
