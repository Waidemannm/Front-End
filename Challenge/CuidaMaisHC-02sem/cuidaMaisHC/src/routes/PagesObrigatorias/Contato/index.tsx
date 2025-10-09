import vilaMariana from "../../../../public/Images/ImgPagesObrigatorias/Contato/Vila-Mariana.png"
import unidadeClinicas from "../../../../public/Images/ImgPagesObrigatorias/Contato/Unidade-Clinicas.png"
import { MdPhone } from 'react-icons/md'


export default function Contato(){
    return(
        <main className="pageContato">
            <h1> <MdPhone size={20} />Fale Conosco</h1>
            <div>
                <h2>Telefone</h2>
                <p>(11) 4673-4333</p>
            </div>
            <div>
                <h2>Unidades</h2>
                <div>
                    <img className="imgContato" src={vilaMariana} alt="Foto da unidade Vila Mariana"/>
                    <p>Unidade Vila Mariana: Rua Domingo de Soto, 100 – Vila Mariana – São Paulo (SP)</p>
                </div>
                <div>
                    <img className="imgContato" src={unidadeClinicas} alt="Foto unidade Clínicas" />
                    <p>Unidade Clínicas: R. 1 – Cerqueira César, São Paulo, Brasil (Portaria 3 do InRad)</p>
                </div>
                <div>
                    <p>Horário de Funcionamento: De segunda a sexta-feira, das 8h às 18h.</p>
                </div>
            </div>
        </main>
    );
}