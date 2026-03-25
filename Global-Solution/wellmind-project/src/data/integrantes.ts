import type { TipoIntegrante } from "../types/tipos/tipoIntegrante";
import moises from "../Images/ImgPagesObrigatorias/Integrantes/Moises.jpeg"
import gabriel from "../Images/ImgPagesObrigatorias/Integrantes/Gabriel.jpeg"
import thiago from "../Images/ImgPagesObrigatorias/Integrantes/Thiago.jpeg"

export const integrantes:TipoIntegrante[] = [
    {
      id: 1,
      nome: "Moisés Waidemann",
      urlImg: `${moises}`,
      paragrafo: "Olá! sou o Moisés Waidemann Molinillo Júnior, tenho 18 anos, sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, estou desenvolvendo uma solução para o Hospital das Clínicas, da turma 1TDSPH.",
      urlGit: "https://github.com/Waidemannm",
      urlLinkedIn: "https://www.linkedin.com/in/mois%C3%A9s-waidemann-a99a31333/"
    }, 
    {
      id:2,
      nome: "Gabriel Sbrana",
      urlImg: `${gabriel}`,
      paragrafo: "Olá, sou o Gabriel Sbrana Campos. Tenho 19 anos, sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, estou desenvolvendo uma solução para o Hospital das Clínicas, da turma 1TDSPH.",
      urlGit: "https://github.com/devsbrana",
      urlLinkedIn: "https://www.linkedin.com/in/gabriel-sbrana-campos-0031b1307/"
    },
    {
      id: 3,
      nome: "Thiago Mota",
      urlImg: `${thiago}`,
      paragrafo: "Olá, sou o Thiago Rodrigues da Mota. Tenho 20 anos, sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, estou desenvolvendo uma solução para o Hospital das Clínicas, da turma 1TDSPH.",
      urlGit: "https://github.com/ThiagoMoota",
      urlLinkedIn: "https://www.linkedin.com/in/thiago-rodrigues-da-mota/"
    }
];