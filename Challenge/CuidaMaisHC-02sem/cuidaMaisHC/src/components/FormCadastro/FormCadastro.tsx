import type { TipoPropsFormCadastro } from "../../types/Forms/tipoFormCadastro";

export default function FormCadastro({register, onSubmit}: TipoPropsFormCadastro){
    return( 
        <div>
            <form className="formCadastro" onSubmit={onSubmit}>
                <div>
                    <label>Cpf: </label>
                    <input type="text" {...register("cpf", { required: true, maxLength: 11})}/>
                </div>
                <div>
                    <label>Número celular: </label>
                    <input type="text" {...register("telefone", { required: true, maxLength: 11, minLength:11})}/>
                </div>
                <div>
                    <label>Nome: </label>
                    <input type="text" {...register("nome", { required: true, maxLength: 200})} />
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" {...register("senha", { required: true, maxLength: 50})}/>
                </div>
                <div className="divButton">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}