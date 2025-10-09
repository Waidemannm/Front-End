import { useEffect, useRef, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link } from "react-router-dom";
import { CiEdit as Editar} from "react-icons/ci";
import { MdDeleteOutline as Excluir } from "react-icons/md";
const URL_API = import.meta.env.VITE_API_URL_BASE;

export default function Produtos(){

    const [produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(()=>{
        
        const fetchData = async ()=>{
            const response = await fetch(URL_API);
            const data:TipoProduto[] = await response.json();
            setProdutos(data); 
        } 
        fetchData();
    },[]);
 
        const modalRef = useRef<HTMLDialogElement>(null);
        const [produtoId, setProdutoId] = useState<string | null>(null);

        const handleDelete = async (id:string)=>{
            try {
                
                if(id && (id != "0") && (id != "")){
                    await fetch(`${URL_API}/${id}`,{
                        method:"DELETE"
                    });

                    setProdutos(produtos.filter((p)=>p.id != Number(id)));
                    modalRef.current?.close();
                }

            } catch (error) {
                console.error(error);
            }
        }
 
    return(
        <main> 
            <h1>Produtos</h1>
           
          <dialog ref={modalRef} className="mx-auto my-auto p-10 border-2 rounded-2xl">
                <div>
                    <h2 className="text-center text-2xl font-bold">Tem certeza que deseja excluir o produto?</h2>
                    <div>
                        <button onClick={()=>handleDelete(produtoId || "0")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5">Sim</button>
                    </div>
                    <div>
                        <button onClick={()=> modalRef.current?.close()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-5">Não</button>
                    </div>
                </div>
          </dialog>

            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                        <th>EDITAR</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td> <Link to={`/editar/produtos/${p.id}`}> <Editar/> </Link> | 
    <Link to="#" onClick={()=>{setProdutoId(p.id.toString()); modalRef.current?.showModal();}}> <Excluir/> </Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>Total de produtos : {produtos.length}</td>
                    </tr>
                </tfoot>
            </table>

        </main>
    );
}