import { useEffect, useRef, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link } from "react-router-dom";
import { CiEdit as Editar } from "react-icons/ci";
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




    const deleteRef = useRef<HTMLDialogElement>(null);
    const [produto, setProduto] = useState<TipoProduto>();

    const handleDelete = async (id:string)=>{
        try {
            
            if(id && (id != "0") && (id != "")){
                await fetch(`${URL_API}/${id}`,{
                    method:"DELETE"
                });

                setProdutos(produtos.filter((p)=>p.id != Number(id)));
                deleteRef.current?.close();
            }

        } catch (error) {
            console.error(error);
        }
    }
    
 
    return(
        <main> 
            <h1>Produtos</h1>

            <dialog className="janelaDelete" ref={deleteRef}>
                <div>
                    <h2>Tem certeza que deseja excluir o produto?</h2>
                    <div className="botoes">
                        <div>
                            <button className="sim" onClick={()=> handleDelete(produto?.id.toString() || "0")}>Sim</button>
                        </div>
                        <div>
                            <button className="nao" onClick={()=> deleteRef.current?.close()}>Não</button>
                        </div>
                    </div> 
                    <div className="dadosProdutos">
                        <p>ID: {produto?.id}</p>
                        <p>Nome: {produto?.nome}</p>
                        <p>R$ {produto?.preco}</p>
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
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td> <Link to={`/editar/produtos/${p.id}`}> <Editar/> </Link> </td> 
                            <td> <Link to="#" onClick={() => {setProduto(p); deleteRef.current?.showModal();}}> <Excluir/> </Link> </td>
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


// const [openModal, setOpenModal] = useState<boolean>(false);

    // const abrirModal = () =>{
    //     setOpenModal(true);
    // }

    // const fecharModal = () =>{
    //     setOpenModal(false);
    // }

{/* <dialog open={openModal} className="bg-yellow-100 border w-30 h-50 rounded-lg">
    <button className="bg-red-100 border w-30 h-10 rounded-lg" onClick={fecharModal}>Close Modal</button >
</dialog>

<button className="bg-green-100 border w-30 h-10 rounded-lg" onClick={abrirModal}>Open Modal</button> */}