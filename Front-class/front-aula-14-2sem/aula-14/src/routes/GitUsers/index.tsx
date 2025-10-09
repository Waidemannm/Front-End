import { useEffect, useState } from "react";
import type { TipoUser } from "../../types/tipoUser";
import CardUser from "../../components/Cards/CardUser";

export default function GitUsers() {
  const [usuarios, setusuarios] = useState<TipoUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users");

        if (!response.ok) {
          throw new Error("Erro na listagem dos usuários do Git!!");
        }

        const data: TipoUser[] = await response.json();
        setusuarios(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>GitUsers</h1>
      <div className="flex flex-wrap justify-between w-full">
        {usuarios.map((u) => (
          <div key={u.id}>
            {/* <CardUser idProps={u.id} loginProps={u.login} avatarProps={u.avatar_url}/> */}
            <CardUser usuario={u} />
          </div>
        ))}
      </div>
    </main>
  );
}
