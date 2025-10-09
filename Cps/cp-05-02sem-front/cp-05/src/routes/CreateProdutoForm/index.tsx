import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { TipoMc } from "../../types/tipoMc";
import Form from "./../../components/Form/Form";

export default function CreateProdutoForm() {

    const navigate = useNavigate();


    const {register, handleSubmit} = useForm<TipoMc>();
    //POST metodo de criar objeto na API, PUT atualizar objeto na API
    //No POST não precisamos da const {id}, e nem useEffect, pois não estamos buscando um objeto existente, estamos criando um novo
    //diferente do PUT e do GET que precisa do id e do useEffect para buscar o objeto existente
    const onSubmit = handleSubmit(async (data) => {
        await fetch('http://localhost:3001/produtos', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        alert("Produto adicionado com sucesso!");
        navigate("/produtos");
    });

    return(
        <main>
           <h1 className="text">Adicionando Produto</h1>
           <Form
               register={register}
               onSubmit={onSubmit}
           />
        </main>
    );
}