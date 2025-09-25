import Task from "./Task";

const HeroIllustration = () => {
  return (
    <aside className="relative">
      <div className="rounded-3xl p-6 shadow-2xl bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Hoje</h3>
            <p className="text-sm text-slate-500">Seu painel de metas</p>
          </div>
          <div className="text-sm text-slate-400">03:45</div>
        </div>

        <ul className="mt-6 space-y-4">
          <Task
            title="Enviar relatório"
            meta="Prioridade: Alta • 09:00"
            status="Concluído"
            icon="✔"
            color="bg-primary/10"
          />
          <Task
            title="Revisar código"
            meta="Prioridade: Média • 14:00"
            status="Em progresso"
            icon="•"
            color="bg-warm/20"
          />
          <Task
            title="Planejar reunião"
            meta="Prioridade: Baixa • 16:00"
            status="Pendente"
            icon="○"
            color="bg-slate-100"
          />
        </ul>
      </div>
    </aside>
  );
};

export default HeroIllustration;
