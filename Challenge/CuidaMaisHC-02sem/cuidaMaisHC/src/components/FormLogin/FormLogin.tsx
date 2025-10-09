import type { TipoPropsFormLogin } from "../../types/Forms/tipoFormLogin"

export default function FormLogin({register, onSubmit}: TipoPropsFormLogin){
    return(
        <div>
            <form className="formLogin" onSubmit={onSubmit}>
                <div>
                    <label>Cpf: </label>
                    <input type="text" {...register("cpf", { required: true, maxLength: 11})} readOnly/>
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" {...register("senha", { required: true, maxLength: 50})}/>
                </div>
                <div className="divButton">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}