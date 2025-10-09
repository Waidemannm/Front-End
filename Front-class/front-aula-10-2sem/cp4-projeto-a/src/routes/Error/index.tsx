import { Link, useNavigate } from "react-router-dom";

export default function Error() {

    const navigate = useNavigate();

    return (
        <main>
            <h1>Error 404 - NotFound</h1>
            <p><Link to="/">Voltar para o início</Link></p>
            <p><Link to="#" onClick={()=> navigate(-1)}>Voltar</Link></p>
        </main>
    );
}