import type { TipoPropsFormCadastro } from "../../types/Forms/tipoFormCadastro";

export default function FormCadastro({register, onSubmit}: TipoPropsFormCadastro){
    return( 
        <div>
            <form className="border-5 rounded-2xl h-[70vh] p-2 border-gray-800 m-10 flex flex-col shadow-2xl md:w-[45vw] lg:w-[35vw] xl:w-[25vw] p-5" onSubmit={onSubmit}>
                <div className="flex flex-col p-1">
                    <label className="text-[1rem]">Email: </label>
                    <input className=" p-2 text-[1.2rem] m-2 rounded-sm border-b-2" type="email" {...register("email", { required: true, maxLength: 200})} />
                </div>
                <div className="flex flex-col p-1">
                    <label className="text-[1rem]">Nome: </label>
                    <input className="p-2 text-[1.2rem] m-2 rounded-sm border-b-2" type="text" {...register("nome", { required: true, maxLength: 200})} />
                </div>
                <div className="flex flex-col p-1">
                    <label className="text-[1rem]">Idade: </label>
                    <input className="p-2 text-[1.2rem] m-2 rounded-sm border-b-2" type="number" {...register("idade", { required: true})} />
                </div>
                <div className="flex flex-col p-1">
                    <label className="text-[1rem]">Gênero: </label>
                    <input className="p-2 text-[1.2rem] m-2 rounded-sm border-b-2" type="text" {...register("genero", { required: true, maxLength: 100})} />
                </div>
                <div className="flex justify-center mt-5 items-center">
                    <div>
                        <button className="flex items-center justify-center bg-[var(--color-font-purple)] w-[25vw] h-[5vh] text-[1.2rem] text-center text-white font-bold rounded-2xl md:w-[30vw] lg:my-0 lg:w-[25vw] xl:w-[20vw] hover:cursor-pointer" type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
} 