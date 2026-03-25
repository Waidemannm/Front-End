import type { TipoPropsFormLogin } from "../../types/Forms/tipoFormLogin"

export default function FormLogin({register, onSubmit}: TipoPropsFormLogin){
    return(
        <div>
            <form className="border-5 rounded-2xl h-[50vh] p-2 border-gray-800 m-10 flex flex-col shadow-2xl md:w-[45vw] lg:w-[35vw] xl:w-[25vw]" onSubmit={onSubmit}>
                <div className="flex flex-col p-5">
                    <label className="text-[1rem]">Nome: </label>
                    <input className="p-1 text-[1.2rem] m-2 rounded-sm border-b-2" type="text" {...register("nome", { required: true, maxLength: 200})} />
                </div>
                <div className="flex flex-col p-5">
                    <label className="text-[1rem]">Email: </label>
                    <input className="p-1 text-[1.2rem] m-2 rounded-sm border-b-2" type="email" {...register("email", { required: true, maxLength: 200})} />
                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <button className="flex items-center justify-center bg-[var(--color-font-purple)] w-[25vw] h-[5vh] text-[1.2rem] text-center text-white font-bold rounded-2xl md:w-[30vw] lg:my-0 lg:w-[25vw] xl:w-[20vw] hover:cursor-pointer" type="submit">Entrar</button>
                    </div>
                </div>
            </form>
        </div>
    ); 
}