import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

const URL_API = import.meta.env.VITE_API_URL_BASE;

export default function EditarProdutos() {
    //Criando um navegador de rotas.
    const navigate = useNavigate();

    //Criando um schema de validação com Zod.
    const produtoSchema = z.object({
        id: z.string().optional(),
        nome: z.string().min(3, "O nome é obrigatório").max(100, "O nome deve ter no máximo 100 caracteres"),
        preco: z.number().min(0, "O preço deve ser maior ou igual a 0")
    });

    type ProdutoInput = z.infer<typeof produtoSchema>;


    //Executando uma desestruturação no hook useParams() para capturar o parâmetro
    // vindo do componente Produto.
    const { id } = useParams<string>();

    //Utilizando o HookForm para manipular os formulários.
    //register -> Registrar os campos do formulário
    //handleSubmit -> Função para tratar o submit do formulário
    //setValue -> Função para setar um valor em um campo do formulário
    //formState -> Objeto com o estado do formulário (ex: erros de validação)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProdutoInput>({
        resolver: zodResolver(produtoSchema), mode: "onChange"
    });


    //Aqui realizamos uma chamada a API para buscar o produto pelo ID
    //e setar os valores nos campos do formulário.
    //Este tipo de REQUEST é chamado de GET.
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${URL_API}/${id}`);
            const data: ProdutoInput = await response.json();
            //Setando os valores nos campos do formulário.
            console.log(data);
            reset({
                id: data.id ?? '',
                nome: data.nome ?? "",
                preco: data.preco ?? 0
            });
        }

        fetchData();

    }, [id, reset]);

    //Função para tratar o SUBMIT do formulário.
    const onSubmit = (data:ProdutoInput) => {
        //Aqui realizamos a chamada a API para enviar os dados editados.
        //Este tipo de REQUEST é chamado de PUT.
        //O fetch por padrão realiza uma requisição do tipo GET.
        //Para alterar o tipo de requisição, precisamos passar um objeto de configuração.
        //Neste objeto podemos passar o método, cabeçalhos e o corpo da requisição.
        //O corpo da requisição deve ser uma string no formato JSON.
        //Para isso utilizamos o JSON.stringify() para converter o objeto em string JSON.
        //Também precisamos passar o cabeçalho "Content-Type" para informar que o corpo da requisição é um JSON.
        //O id do produto é passado na URL da requisição.
        //O data é o objeto que contém os dados do formulário.
        //method -> método da requisição (GET, POST, PUT, DELETE)
        //headers -> cabeçalhos da requisição
        //body -> corpo da requisição

        try {
           ( async () => { 
            await fetch(`${URL_API}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            alert("Produto editado com sucesso!");
            navigate("/produtos");
              })();
        } catch (error) {
            alert("Erro ao editar o produto!");
            console.error("Erro ao editar o produto:", error);
        }
    }

    return (
        <main className="classePrincipal">
            <h1>Editar os produtos</h1>

            <div>
                <form className="frmEditar" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" {...register("id")} />
                    <div>
                        <label>Nome Produto:</label>
                        <input type="text" {...register("nome", { required: true, maxLength: 100 })}
                            aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined} />
                        {errors.nome && <p id="nome-error" className="mt-1 text-sm text-red-500">{errors.nome.message}</p>}
                    </div>
                    <div>
                        <label>Preço:</label>
                        <input type="number" step="0.01" {...register("preco", { valueAsNumber: true, required: true })}
                            aria-invalid={!!errors.preco} aria-describedby={errors.preco ? "preco-error" : undefined} />
                        {errors.preco && <p id="preco-error" className="mt-1 text-sm text-red-500">{errors.preco.message}</p>}
                    </div>
                    <div>
                        <button type="submit">Editar</button>
                    </div>
                </form>
            </div>

        </main>
    );
}


