import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      <FeatureCard
        title="Gestão de metas"
        desc="Criar, editar, excluir e concluir metas com facilidade."
      />
      <FeatureCard
        title="Sincronização"
        desc="Dados atualizados em todos os seus dispositivos em tempo real."
      />
      <FeatureCard
        title="Histórico"
        desc="Registros detalhados para você acompanhar seu progresso."
      />
    </section>
  );
};

export default Features;
