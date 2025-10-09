export type TipoUser = {
    id:number;
    login:string;
    avatar_url:string;
}

export type TipoUserCard = {
    usuario:TipoUser;
}