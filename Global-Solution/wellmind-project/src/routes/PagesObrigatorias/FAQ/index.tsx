export default function FAQ(){
    return(
        <main className="mt-100 lg:mt-50 p-5 flex flex-col items-center">
            <h1 className="font-bold text-center text-[1.2rem]">Como podemos te ajudar?</h1>
            <div className="p-5 my-10 bg-[var(--color-orange)] rounded-md shadow-lg lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]">
                <h1 className="font-bold text-center text-[1.2rem]">Sobre o WellMind</h1>
                <div>
                    <h2 className="font-bold m-2">O que é o WellMind?</h2>
                    <p>O WellMind é uma plataforma que usa inteligência artificial para analisar seus hábitos diários e fornecer orientações personalizadas de bem-estar.</p>

                    <h2 className="font-bold m-2">Quem pode usar o WellMind?</h2>
                    <p>Qualquer pessoa que deseja acompanhar seus hábitos e melhorar sua saúde mental e equilíbrio emocional pode utilizar o WellMind.</p>

                    <h2 className="font-bold m-2">O WellMind é gratuito?</h2>
                    <p>Sim. O acesso ao questionário diário e aos feedbacks personalizados é completamente gratuito.</p>

                    <h2 className="font-bold m-2">Preciso criar conta para usar?</h2>
                    <p>Sim. É necessário um cadastro simples para que o sistema registre seu histórico e personalize seus retornos.</p>
                </div>
            </div>
            <div className="p-5 my-10 bg-[var(--color-orange)] rounded-md shadow-lg lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]"> 
                <h1 className="font-bold text-center text-[1.2rem]">Questionário diário</h1>
                <div>
                    <h2 className="font-bold m-2">Como funciona o questionário?</h2>
                    <p>Você responde perguntas rápidas sobre sono, alimentação, humor, energia, hidratação, foco e estresse. Leva menos de 1 minuto.</p>

                    <h2 className="font-bold m-2">Por que devo responder todos os dias?</h2>
                    <p>Quanto mais você responde, mais preciso fica o feedback gerado pela inteligência artificial.</p>

                    <h2 className="font-bold m-2">As perguntas sempre são as mesmas?</h2>
                    <p>Sim. O foco é acompanhar seus hábitos de forma consistente para identificar padrões e tendências.</p>

                    <h2 className="font-bold m-2">Posso responder mais de uma vez por dia?</h2>
                    <p>Não. O objetivo é registrar apenas um ciclo diário para manter análises consistentes.</p>
                </div>
            </div>
            <div className="p-5 my-10 bg-[var(--color-orange)] rounded-md shadow-lg lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]">
                <h1 className="font-bold text-center text-[1.2rem]">Feedback com IA</h1>
                <div>
                    <h2 className="font-bold m-2">Como o feedback é gerado?</h2>
                    <p>As respostas são enviadas para uma inteligência artificial que analisa seus dados e cria uma mensagem personalizada com orientações práticas.</p>

                    <h2 className="font-bold m-2">O feedback é sempre diferente?</h2>
                    <p>Sim. Ele muda de acordo com suas respostas diárias e com seu padrão de hábitos.</p>

                    <h2 className="font-bold m-2">A IA pode errar nas recomendações?</h2>
                    <p>Sim. O feedback do WellMind não substitui acompanhamento médico ou psicológico e deve ser usado como orientação geral.</p>

                    <h2 className="font-bold m-2">Posso consultar feedbacks antigos?</h2>
                    <p>Sim, todos os feedbacks ficam registrados no seu histórico, disponível dentro da plataforma.</p>
                </div>
            </div>
            <div className="p-5 my-10 bg-[var(--color-orange)] rounded-md shadow-lg lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]">
                <h1 className="font-bold text-center text-[1.2rem]">Privacidade e segurança</h1>
                <div>
                    <h2 className="font-bold m-2">Meus dados ficam protegidos?</h2>
                    <p>Sim. Todos os dados enviados são armazenados com segurança e não são compartilhados com terceiros.</p>

                    <h2 className="font-bold m-2">A plataforma coleta informações sensíveis?</h2>
                    <p>Somente hábitos diários informados por você. Nenhuma informação médica específica é solicitada.</p>

                    <h2 className="font-bold m-2">Posso excluir minha conta?</h2>
                    <p>Sim. Basta solicitar a remoção e todos os seus dados serão apagados permanentemente.</p>
                </div>
            </div>
        </main>
    );
} 