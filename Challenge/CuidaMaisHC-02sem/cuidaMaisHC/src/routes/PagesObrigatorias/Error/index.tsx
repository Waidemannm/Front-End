import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="pageError">
      <h1 className="tituloErro">Error 404</h1>
      <p className="mensagemErro">
        Página não encontrada. Verifique a URL ou volte para a página inicial.
      </p>
      <Link to="/" className="btnVoltar">
        Voltar para o início
      </Link>
    </main>
  );
}
