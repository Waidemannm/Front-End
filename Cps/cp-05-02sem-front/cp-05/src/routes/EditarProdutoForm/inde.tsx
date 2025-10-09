import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useForm } from "react-hook-form";
import type { TipoMc } from "../../types/tipoMc";
import { useEffect } from "react";

export default function EditarProdutoForm(){
    const {id} = useParams<string>();

    const navigate = useNavigate();    

    const {register, handleSubmit, setValue} = useForm<TipoMc>();

    useEffect(() => {
        const fetchdata = async () => {
            try{
                const response = await fetch(`http://localhost:3001/produtos/${id}`);
                if(!response.ok){
                    throw new Error("Produto não encontrado");
                }
                const data: TipoMc =  await response.json();
                setValue("nome", data.nome);
                setValue("preco", data.preco);
                setValue("urlImg", data.urlImg);
            }catch(error){
                console.error("Erro ao buscar produto:", error);
            }
        }
        fetchdata();
    }, [id, setValue])



    const onSubmit = handleSubmit(async (data) => {
        await fetch(`http://localhost:3001/produtos/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        alert("Produto editado com sucesso!");
        navigate(`/produtos/${id}`);
    })



    return(
        <main>
            <h1 className="text">Editando Produto</h1>
            <Form
                register={register}
                onSubmit={onSubmit}
                isEditing={true}
            />
        </main>
    );
}