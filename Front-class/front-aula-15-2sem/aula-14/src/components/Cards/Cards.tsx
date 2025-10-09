import type { TipoProduto } from "../../types/tipoProduto"

// export default function Cards(props:{nome:string,preco:number,id:number,img:string}){
export default function Cards(props:{produto:TipoProduto}){
    return(
        <div className="border-2 m-5 w-50 p-8">
           <h2>Produto:{props.produto.nome}</h2>
            <p>R$:{props.produto.preco}</p>
            <p>Identificação:{props.produto.id}</p>
            <img src={props.produto.urlAvatar} alt="Icone de produtos" className="w-10"/>
        </div>
    )
}