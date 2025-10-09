import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4">
          Not Found - Erro 404
        </h1>
        <p className="text-base sm:text-lg m-10 md:text-xl text-gray-700">
          A página que você está tentando acessar não existe.
        </p>
        <Link to="/" className="m-10 bg-blue-500 hover:bg-blue-900
           text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300
           sm:px-8 sm:py-4">
        Voltar para o início
      </Link>
      </div>
    </main>
  );
}
