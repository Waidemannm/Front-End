import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteProduto(){

    const {id} = useParams<string>();

    const navigate = useNavigate(); 
    
    useEffect(() => {
        const deletarProduto = async () => {
            const confirmacao = window.confirm("Tem certeza que deseja apagar este produto?");
            if (!confirmacao) {
                navigate(`/produtos`);
                return;
            }
            try{
                await fetch(`http://localhost:3001/produtos/${id}`, {
                    method: "DELETE",
                });
                alert("Produto apagado com sucesso!");
                navigate(`/produtos`);
            } catch(error){
                console.error("Erro ao apagar produto:", error);
                alert("Erro ao apagar produto. Tente novamente mais tarde.");
                navigate(`/produtos`);
            }
        };
        deletarProduto();
        }, [id, navigate])


    return(
        <main>
            <h1 className="text">Apagando Produto...</h1>
        </main>
    );
}