import { useEffect, useState } from "react";
import type { TipoGitUsers } from "../../types/tipoGitUsers";
import { useParams } from "react-router-dom";
import CardGit from "../../components/CardGit/CardGit";
export default function GitUsers(){

    const{ id } = useParams<string>();


    const [users, setUsers] = useState<TipoGitUsers[]>([]);

    useEffect(() => {
        const fetchdata =  async()=> {
            const response = await fetch(`https://api.github.com/users`);
            const data: TipoGitUsers[] =  await response.json();
            setUsers(data);
        }
        fetchdata();
    },[id]);


    return(
        <main>
            <h1>Git Users</h1>
            <div className="pageCard">
                {users.map((u)=>(                 
                    <CardGit gitUser={u}/>
                ))}
            </div>
        </main>
    );
} 