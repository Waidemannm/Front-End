import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-4">
      <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]
           font-bold text-red-600">Error 404</h1>
      <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem]
           text-gray-600 mt-4 max-w-[80%]">
        Página não encontrada. Verifique a URL ou volte para a página inicial.
      </p>
      <Link to="/" className="mt-8 bg-[var(--btn-color-menu)] hover:bg-[var(--btn-color-menu-atual)]
           text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300
           sm:px-8 sm:py-4">
        Voltar para o início
      </Link>
    </main>
  );
}
 