import type { TipoCliente } from "../types/tipoCliente";
import urlAvatar from "../img/cliente.png";

export const listaClientes:TipoCliente[] = [
    {id:1, nome:"Joaquim", email:"jo@email.com", telefone:"11-11111-0000", imagem:urlAvatar},
    {id:2, nome:"Antonio", email:"an@email.com", telefone:"22-22222-0000", imagem:urlAvatar},
    {id:3, nome:"Mário", email:"ma@email.com", telefone:"33-33333-0000", imagem:urlAvatar},
    {id:4, nome:"Carlos", email:"ca@email.com", telefone:"44-44444-0000", imagem:urlAvatar},
    {id:5, nome:"Luisa", email:"lu@email.com", telefone:"55-55555-0000", imagem:urlAvatar},
]