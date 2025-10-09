import { useForm } from "react-hook-form"
import type { TipoProduto } from "../../types/tipoProduto";
import { useNavigate } from "react-router-dom";
const URL_API = import.meta.env.VITE_API_URL_BASE;

export default function CadProduto() {

  const {register, handleSubmit, formState: {errors}} = useForm<TipoProduto>({
    mode: "onChange"
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit( async (data:TipoProduto) => {
        try{
          await fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        alert("Produto cadastrado com sucesso!");
        navigate("/produtos");
        } catch (error){
          alert("Erro ao cadastrar Produto " + error)
            console.error("Erro ao cadastrar Produto " + error)
        }
        
    });

  return (
     <main className="classePrincipal">
        <h1>Editar os produtos</h1>
        <div>
            <form className="frmEditar" onSubmit={onSubmit}>
                <div>
                    <label>Nome Produto:</label>
                    <input type="text" {...register("nome", {required: true, maxLength: 200, minLength: 2})} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined}/>
                    {errors.nome && <p className="ErrorInput" id="nome-error">Nome inválido</p>}

                </div>
                <div>
                    <label>Preço:</label>
                    <input type="number" step={0.01} {...register("preco", {valueAsNumber: true, required: true, min:0.01 })} aria-invalid={!!errors.preco} aria-describedby={errors.preco ? "preco-error" : undefined}/>
                    {errors.preco && <p className="ErrorInput" id="preco-error">Preço inválido</p>}
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>                
        </div>
    </main>
  )
}
