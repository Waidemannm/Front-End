import Menu from "../Menu/Menu";

export default function Cabecalho(){
    return(
        <header className="bg-blue-100 gap-5 w-full flex flex-col items-center p-4 xl:w-[100vw]">
            <h1 className="font-bold text-[1.2rem] text-blue-500">Sistema de Login</h1>
            <Menu/>
        </header>
    );
}