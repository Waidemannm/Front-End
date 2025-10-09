
import { MdAdd, MdSave } from "react-icons/md";
import type { TipoPropsForm } from "../../types/tipoPropsForm";

export default function Form({register, onSubmit, isEditing = false}: TipoPropsForm){
    return(
        <div className="pageForm">
            <form className="form" onSubmit={onSubmit}>
                {/* O campo id não é necessário no formulário de criação(POST), pois o id será gerado automaticamente pelo json-server
                Diferente do formulário de edição(PUT) que precisa do campo id para identificar qual objeto será atualizado, ou no de deletar(DELETE) que também precisa do id para identificar qual objeto será removido */}
                <div>
                    <label>Nome</label>
                    <input type="text" {...register("nome", { required: true, maxLength: 100})} />
                </div>
                <div>
                    <label>Preço</label>
                    <input type="number" step="0.01" {...register("preco", { required: true})} />
                </div>
                <div>
                    <label>URL da Imagem</label>
                    <input type="text" {...register("urlImg", { required: true, maxLength: 355})} />
                </div>
                <div>
                    <button className="btnProduto" type="submit">
                        {isEditing ? <MdSave size={20} /> : <MdAdd size={20} />}
                        {isEditing ? "Salvar Alterações" : "Adicionar Produto"}
                    </button>
                </div>
            </form>
        </div>
    );
}