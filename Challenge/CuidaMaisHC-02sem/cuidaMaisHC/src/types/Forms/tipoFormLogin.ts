import type { UseFormRegister } from "react-hook-form";
import type { tipoLogin } from "../tipoForm/tipoLogin";

export type TipoPropsFormLogin = { 
    register: UseFormRegister<tipoLogin>;
    onSubmit: () => void;  
}
