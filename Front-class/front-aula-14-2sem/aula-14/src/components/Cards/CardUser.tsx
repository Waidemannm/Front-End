import type { TipoUserCard } from "../../types/tipoUser";

// export default function CardUser(props:{idProps:number,loginProps:string,avatarProps:string})
export default function CardUser({usuario}:TipoUserCard)
{
  return (
    <figure key={usuario.id} className="w-[10vw] flex flex-col items-center">
        <img src={usuario.avatar_url} alt={usuario.login} className="rounded-2xl"/>
        <hr />
        <figcaption>{usuario.login}</figcaption>
    </figure>
  );
}

