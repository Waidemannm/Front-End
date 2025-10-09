import { Link } from "react-router-dom";
import bot from "../../../../public/Images/ImgSolucao/Guia/bot.png";
import guia from "../../../../public/Images/ImgSolucao/Guia/guia.png";

export default function Guia(){
    return(
        <main className="pageGuia">
            <div className="guia">
                <h1>Guia</h1>
                <img src={guia} alt="Imagem de um boneco"/>
                <p>Bem-vindo ao nosso app! Agende suas consultas médicas de forma rápida e fácil, seguindo as instruções na tela. Se precisar de ajuda, estamos à disposição. Clique no botão abaixo para agendar sua consulta.</p>
                <Link className="btnGuia" to="/agendamento">Clique Aqui</Link>
            </div>
            <div className="bot">
                <h1>Robô</h1>
                <img src={bot} alt="Imagem do assistente virtual"/>
                <p>Olá! Sou seu assistente de consultas, pronto para te ajudar. Estou à disposição para tirar dúvidas ou ajudar.</p>
            </div>
        </main>
    );
}