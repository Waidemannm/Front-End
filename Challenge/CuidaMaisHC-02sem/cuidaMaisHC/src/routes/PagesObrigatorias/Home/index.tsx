import { Link } from "react-router-dom";
import { MdElderly } from "react-icons/md";
import { FaUserAlt, FaMobileAlt, FaRobot  } from "react-icons/fa";


export default function Home(){
    return( 
        <main className="pageHome">
            <div className="sobre">
                <h1>Hospital das Clínicas FMUSP</h1>
                <p>O Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo é um complexo de instituições de saúde, localizado em várias regiões da cidade de São Paulo, Brasil.</p>
            </div>
            <div className="beneficios">
                <h1>Benefícios Cuida Mais HC</h1>
                <MdElderly className="iconeBeneficios"/>
                <p>Acesso simples para idosos</p>
                <FaRobot className="iconeBeneficios"/>
                <p>Assistente virtual simples</p>
                <FaUserAlt className="iconeBeneficios"/>
                <p>Login fácil</p>
                <FaMobileAlt className="iconeBeneficios"/>
                <p>Acessibilidade para saúde digital</p>
            </div>
            <div className="cuidaMais">
                <h1>No nosso site</h1>
                <p>Entre na sua conta ou faça login</p>
                <Link className="btnCuidaMais" to="/login-or-create-account">Entrar</Link>
                <p>Se tiver dúvidas acesse nossa página de dúvidas frequentes</p><Link className="btnCuidaMais" to="/FAQ">Dúvidas Frequentes</Link>
                <p>Entre em contato conosco através da página de contato</p>
                <Link className="btnCuidaMais" to="/contato">Contato</Link>
            </div>
            <div className="comoChegar">
                <h1>Hospital das Clínicas FMUSP</h1>
                <p>O Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo é um complexo de instituições de saúde, localizado em várias regiões da cidade de São Paulo, Brasil.</p>
                <p className="endereco">Av. Dr. Enéas de Carvalho Aguiar, 225 Cerqueira César São Paulo</p>
                <Link className="btnCuidaMais" to="https://maps.app.goo.gl/2v5JZJah4BUYKXN16" target="_blank" rel="noopner noreferrer">Como chegar</Link>
            </div>
            <div className="integrantes">
                <h1>Integrantes</h1>
                <p>O Cuida Mais HC foi produzido por Moisés Waidemann, Gabriel Sbrana e Thiago Mota da 1TDSPH. Acesse nossa página de integrantes para mais informações sobre.</p>
                <Link className="btnCuidaMais" to="/integrantes">Integrantes </Link>
            </div>
        </main>
    );
}