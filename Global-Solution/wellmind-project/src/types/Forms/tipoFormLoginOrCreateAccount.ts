import type { UseFormRegister } from "react-hook-form";
import type { tipoLoginOrCreateAccount } from "./../tipoForm/tipoLoginOrCreateAccount";

export type TipoPropsFormLoginOrcreateAccount = { 
    register: UseFormRegister<tipoLoginOrCreateAccount>;
    onSubmit: () => void;  
}
