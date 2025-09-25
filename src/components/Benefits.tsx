const Benefits = () => {
  return (
    <section
      id="benefits"
      className="max-w-6xl mx-auto mt-12 bg-white/60 p-8 rounded-2xl shadow-md"
    >
      <h3 className="text-2xl font-semibold">Benefícios esperados</h3>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
        <li className="p-4 border border-slate-100 rounded-md">
          Melhoria da produtividade individual e profissional.
        </li>
        <li className="p-4 border border-slate-100 rounded-md">
          Maior controle sobre metas e atividades diárias.
        </li>
        <li className="p-4 border border-slate-100 rounded-md">
          Histórico detalhado para análise de desempenho.
        </li>
        <li className="p-4 border border-slate-100 rounded-md">
          Segurança e privacidade dos dados dos usuários.
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
