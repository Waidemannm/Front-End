import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
const URL_API = import.meta.env.VITE_API_URL_BASE;
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

export default function EditarProdutos(){
    //Criando um navegador de rotas.
    const navigate = useNavigate();

    //criando schema de validacao com o zod
    const produtoSchema = z.object({
        id: z.string().optional(),
        nome: z.string().min(2, "O nome é obrigatório").max(200, "O nome deve tero máximo de 200 caracteres"),
        preco: z.number().min(0, "O preço deve ser maior ou igual a zero"),
        urlAvatar: z.string().url("A URL do avatar é inválida").optional()
    });
    type ProdutoInput = z.infer<typeof produtoSchema>;

    //Executando uma desestruturação no hook useParams() para capturar o parâmetro
    // vindo do componente Produto.
    const { id } = useParams<string>();
    
    //Utilizando o HookForm para manipular os formulários.
    //register -> Registrar os campos do formulário
    //handleSubmit -> Função para tratar o submit do formulário
    //setValue -> Função para setar um valor em um campo do formulário
    //formState -> Erros de validação
    const { register, handleSubmit, reset, formState: {errors}} = useForm<ProdutoInput>({
        resolver: zodResolver(produtoSchema), mode: "onChange"
    });
    

    //Aqui realizamos uma chamada a API para buscar o produto pelo ID
    //e setar os valores nos campos do formulário.
    //Este tipo de REQUEST é chamado de GET.
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${URL_API}/${id}`);
            const data: ProdutoInput = await response.json();
            reset({       //?? se nao tiver nada
                id: data.id ?? "",
                nome: data.nome ?? "",
                preco: data.preco  ?? 0,
                urlAvatar: data.urlAvatar ?? ""
            })
        }

        fetchData();

    }, [id,reset]);

    //Função para tratar o SUBMIT do formulário.
    const onSubmit = handleSubmit( async (data) => {
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
        await fetch(`${URL_API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        alert("Produto editado com sucesso!");
        navigate("/produtos");
    });

    return(
        <main className="classePrincipal">
            <h1>Editar os produtos</h1>

<div>
    <form className="frmEditar" onSubmit={onSubmit}>
        <input type="hidden" {...register("id")} />
        <div>
            <label>Nome Produto:</label>
            <input type="text" {...register("nome", {required: true})} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined}/>
            {errors.nome && <p className="ErrorInput" id="nome-error">{errors.nome.message}</p>}

        </div>
        <div>
            <label>Preço:</label>
            <input type="number" step="0.01" {...register("preco", {valueAsNumber: true, required: true})} aria-invalid={!!errors.preco} aria-describedby={errors.preco ? "preco-error" : undefined}/>
            {errors.preco && <p className="ErrorInput" id="preco-error">{errors.preco.message}</p>}
        </div>
        <div>
            <button type="submit">Editar</button>
        </div>
    </form>                
</div>
 
        </main>
    );
}













// import { useParams } from "react-router-dom";
// import type { TipoProduto } from "../../types/tipoProduto";
// import { useEffect, useState } from "react";
// import Cards from "../../components/Cards/Cards";

// export default function EditarProdutos(){

//     //Executando uma desestruturação no rook useParams() para capturar o parâmetro
//     // vindo do componente Produto.
//     const { id } = useParams<string>();

//     const [produto, setProduto] = useState<TipoProduto>()

//     //Tranforme a recuperação do objeto  direto da API e não da lista mocada...
 
//     useEffect(()=>{

//         const fetchData = async ()=>{
//             //Recebendo a lista de dado em formato JSON.
//             const response = await fetch("http://localhost:3001/produtos");
//             //Parsear os dados de json para literal
//             const data:TipoProduto[] = await response.json();
//             //Procurar o objeto na lista(data) comparando o id que chegou de produtos com o id de data.
//             const produtoFind:TipoProduto | undefined = data.find(p => (p.id) === Number(id)) ;
//             setProduto(produtoFind);
//         }

//         fetchData();
//     },[id]);
    
//     return(
//         <main>
//             <h1>Editar os produtos</h1>
//             <div>
//                 <p>ID    : {produto?.id}</p>
//                 <p>Nome  : {produto?.nome}</p>
//                 <p>Preço : {produto?.preco}</p>
//             </div>
//             <div>
//                 {produto ? <Cards produto={produto}/> : <p>Produto não encontrado.</p> }
//             </div>
//         </main>
//     );
// }