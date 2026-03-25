import type { UseFormRegister } from "react-hook-form";
import type { tipoCadastro } from "./../tipoForm/tipoCadastro";

export type TipoPropsFormCadastro = { 
    register: UseFormRegister<tipoCadastro>;
    onSubmit: () => void;  
}