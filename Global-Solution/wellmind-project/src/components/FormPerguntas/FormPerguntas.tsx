import type { tipoPropsFormPerguntas } from "../../types/Forms/tipoFormPerguntas";


export default function FormPerguntas({register, onSubmit}: tipoPropsFormPerguntas){
    return(
        <div>
            <form className="border-5 rounded-2xl h-[110vh] p-5 border-gray-800 m-10 flex flex-col shadow-2xl md:w-[45vw] lg:w-[35vw] xl:w-[25vw]" onSubmit={onSubmit}>
                <div className="flex flex-col p-5">
                    <label className="text-[1rem] ">Quantidade de horas dormidas</label>
                    <select className="p-1 text-[1rem] m-1" {...register("sono", {required: true})}>
                        <option value="">(1-24)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </select>
                </div>
                <div className="flex flex-col p-5">
                    <label className="text-[1rem]">Escala de humor e energia</label>
                    <select className="p-1 text-[1rem] m-1" {...register("humor", {required: true})}>
                        <option value="">(1-5)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="flex flex-col p-5">
                    <label className="text-[1rem]">Escala de estresse e foco</label>
                    <select className="p-1 text-[1rem] m-1" {...register("estresse", {required: true})}>
                        <option value="">(1-5)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="flex flex-col p-5">
                    <label className="text-[1rem] ">Litros de água consumidos</label>
                    <select className="p-1 text-[1rem] m-1" {...register("agua", {required: true})}> 
                        <option value="">(1-10)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="flex flex-col p-5">
                    <label className="text-[1rem]">Quantidade de refeições feitas</label>
                    <select className="p-1 text-[1rem] m-1" {...register("alimentacao", {required: true})}>
                        <option value="">(1-10)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="flex flex-col p-5">
                    <label className="text-[1rem]">Observações: </label>
                    <input className="p-1 text-[1.2rem] m-2 rounded-sm border-b-2" {...register("observacoes", {required: false})} type="text" placeholder="Opcional"/>
                </div>

                <div className="flex justify-center items-center">
                    <div>
                        <button className="flex items-center justify-center bg-[var(--color-font-purple)] w-[25vw] h-[5vh] text-[1.2rem] text-center text-white font-bold rounded-2xl md:w-[30vw] lg:my-0 lg:w-[25vw] xl:w-[20vw] hover:cursor-pointer" type="submit">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}