import type { TipoProduto } from "../../types/tipoProduto";
type CardProduto = {
    produto:TipoProduto;
}
// export default function Cards(props:{nome:string, preco:number, id:number, imagem:string}){
export default function Cards({produto}:CardProduto){
    return(
        <div className="border-2 m-5 w-50 p-7">
            <h2>Produto: {produto.nome}</h2>
            <p>R$: {produto.preco}</p>
            <p>Identificação: {produto.id}</p>
            <img src={produto.urlAvatar} alt="Icone dos produtos" className="w-24"/>
        </div>
    );
}