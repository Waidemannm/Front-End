import type { TipoGitUsers } from "../../types/tipoGitUsers";

export default function GitUser(props:{gitUser:TipoGitUsers}){
    return(
        <div className="card">
                <h2>Id: {props.gitUser.id}</h2>
                <h3>Login: {props.gitUser.login}</h3>
                <img src={props.gitUser.avatar_url} alt="Imagem de Usuário" className="imgGitUser"/>
        </div>
    );
}   