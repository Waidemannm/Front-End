import type { tipoFormAgendamento } from "../../types/Forms/tipoFormAgendamento";

export default function FormAgendamento({register, onSubmit}: tipoFormAgendamento){
    return(
        <div className="agendamento"> 
            <form className="formAgendamento" onSubmit={onSubmit}>
                <div>
                    <label>Cpf: </label>
                    <input type="text" placeholder="Digite seu cpf"{...register("cpf", { required: true, maxLength: 11})}/>
                </div>
                <div>
                    <label>Nome: </label>
                    <input type="text" placeholder="Digite seu nome"{...register("nome", { required: true, maxLength: 200})} />
                </div>
                <div>
                    <label>Telefone: </label>
                    <input type="text" placeholder="Digite seu telefone"{...register("telefone", { required: true, maxLength: 11, minLength:11})}/>
                </div>
                <div>
                    <label>Data: </label>
                    <input type="date" {...register("data", { required: true, maxLength: 50})}/> 
                </div>
                <div>
                    <label>Horário: </label>
                    <select {...register("horario", { required: true })}>
                        <option value=""></option>
                        <option value="07:00">07:00</option>
                        <option value="07:30">07:30</option>
                        <option value="08:00">08:00</option>
                        <option value="08:30">08:30</option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                    </select>

                </div>
                <div>
                    <label>Especialidade: </label>
                    <select {...register("especialidade", { required: true })}>
                        <option value=""></option>
                        <option value="Atenção a Doença Renal Crônica">Atenção a Doença Renal Crônica</option>
                        <option value="Atenção à Obesidade">Atenção à Obesidade</option>
                        <option value="Atenção a Pessoas com Doenças Raras">Atenção a Pessoas com Doenças Raras</option>
                        <option value="Atenção à Saúde Auditiva">Atenção à Saúde Auditiva</option>
                        <option value="Atenção à Saúde Reprodutiva">Atenção à Saúde Reprodutiva</option>
                        <option value="Atenção Domiciliar">Atenção Domiciliar</option>
                        <option value="Atenção Psicossocial">Atenção Psicossocial</option>
                        <option value="Atendimento Geral">Atendimento Geral</option>
                        <option value="Cardiologia e Tratamento Cardiovascular">Cardiologia e Tratamento Cardiovascular</option>
                        <option value="Cirurgia Reparadora">Cirurgia Reparadora</option>
                        <option value="Cirurgia Torácica">Cirurgia Torácica</option>
                        <option value="Cirurgia Vascular">Cirurgia Vascular</option>
                        <option value="Diagnóstico por Imagem">Diagnóstico por Imagem</option>
                        <option value="Diagnóstico de Laboratório Clínico">Diagnóstico de Laboratório Clínico</option>
                        <option value="Diagnóstico por Anatomia Patológica ou Citopatologia">Diagnóstico por Anatomia Patológica ou Citopatologia</option>
                        <option value="Dispensação de Órteses e Próteses">Dispensação de Órteses e Próteses</option>
                        <option value="Endocrinologia">Endocrinologia</option>
                        <option value="Exame de DST/HIV/Aids">Exame de DST/HIV/Aids</option>
                        <option value="Farmácia">Farmácia</option>
                        <option value="Fisioterapia">Fisioterapia</option>
                        <option value="Hemoterapia">Hemoterapia</option>
                        <option value="Imunização">Imunização</option>
                        <option value="Neurologia e Neurocirurgia">Neurologia e Neurocirurgia</option>
                        <option value="Oftalmologia">Oftalmologia</option>
                        <option value="Oncologia">Oncologia</option>
                        <option value="Otorrinolaringologia">Otorrinolaringologia</option>
                        <option value="Pneumologia">Pneumologia</option>
                        <option value="Pré-natal / Parto e Nascimento">Pré-natal / Parto e Nascimento</option>
                        <option value="Processo Transexualizador">Processo Transexualizador</option>
                        <option value="Reabilitação">Reabilitação</option>
                        <option value="Suporte Nutricional">Suporte Nutricional</option>
                        <option value="Terapia Intensiva">Terapia Intensiva</option>
                        <option value="Transplante">Transplante</option>
                        <option value="Urgência e Emergência">Urgência e Emergência</option>
                        <option value="Urologia">Urologia</option>
                    </select>

                </div>
                <div>
                    <label>Observações: </label>
                    <input type="text"  placeholder="Opcional"{...register("observacoes", { required: false, maxLength: 200})}/>
                </div>
                <div className="divButton">
                    <button type="submit">Agendar</button>
                </div>
            </form>
        </div>
    );
}