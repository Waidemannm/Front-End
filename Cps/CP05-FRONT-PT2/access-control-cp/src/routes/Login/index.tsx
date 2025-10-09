import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin";

export default function Login() {
    return(
        <main>
            <div className="text-center">
                <FormLogin/>
                <div><Link className="text-blue-500 font-bold hover:text-blue-700 xl:text-[1.2rem]" to="/cadastro">Ou cadastre-se</Link></div>
            </div>
        </main>
    );
}