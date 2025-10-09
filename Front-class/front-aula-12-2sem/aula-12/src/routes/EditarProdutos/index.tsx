import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import type { TipoProduto } from "../../types/tipoProduto";
import { useForm } from "react-hook-form";

export default function EditarProdutos(){
    //criando um navegador de rotas
    const navigate = useNavigate();


    const{ id } = useParams<string>();

    //
    // const [produto, setProduto] = useState<TipoProduto>({
    //     id:0,
    //     nome:"",
    //     preco:0,
    //     urlAvatar:""
    // });

    const {register, handleSubmit, setValue} = useForm<TipoProduto>();

    //Aqui realizando uma request do tipo GET e setar os valores no campo do formulário
 
    useEffect(() => {
        const fetchData = async ()=>{
            const response = await fetch(`http://localhost:3001/produtos/${id}`);
            const data:TipoProduto = await response.json();
            // setProduto(data);
            // console.log(produto);
            setValue("id", data.id);
            setValue("nome", data.nome);
            setValue("preco", data.preco);
        }

        fetchData();
    }, [id, setValue]);
    //Cria um formulário e receber os dados do produto nesse formulário!
    //VocÊ deve usar os dados do objeto nos campos...

    //Função para fazer o submit do formulário, confirma a atualização
    const onSubmit = handleSubmit(async (data) => {
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
        await fetch(`http://localhost:3001/produtos/${id}`,{
            method: "PUT",
            headers:{
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
            {/* {(produto.nome != "") ? <p>{produto.nome}</p> : <h2>Produto não encontrado!</h2>} */}
            <div>
                <form className="frmEditar" onSubmit={onSubmit}>
                    <input type="hidden" {...register("id")} />
                    <div>
                        <label>Nome Produto:</label>
                        <input type="text" {...register("nome", { required: true, maxLength: 100})} />
                    </div>
                    <div>
                        <label>Preço:</label>
                        <input type="number" step="0.01" {...register("preco", { required: true})} />
                    </div>
                    <div>
                        <button type="submit" {...handleSubmit}>Editar</button>
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