import type { TipoPropsFormLoginOrcreateAccount } from "../../types/Forms/tipoFormLoginOrCreateAccount";

export default function FormloginOrCreateAccount({register, onSubmit}: TipoPropsFormLoginOrcreateAccount){
    return(
        <div>
            <form className="formLoginOrCreate" onSubmit={onSubmit}>
                <div>
                    <label>Cpf: </label>
                    <input type="text" placeholder="Digite seu cpf"{...register("cpf", { required: true, maxLength: 11})}/>
                </div>
                <div className="divButton">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}