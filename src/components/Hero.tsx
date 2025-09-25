import HeroIllustration from "./HeroIllustration";
import Info from "./Info";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Transforme suas metas diárias em conquistas reais
        </h2>
        <p className="mt-4 text-slate-600 max-w-xl">
          DailyGoals ajuda você a definir, organizar, acompanhar e concluir
          metas diárias com sincronização entre dispositivos, histórico
          detalhado e autenticação segura.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            id="cta"
            href="#"
            className="inline-flex items-center gap-3 bg-primary text-slate-600 px-5 py-3 rounded-lg shadow-lg hover:scale-[0.995] transition"
          >
            Experimentar grátis
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-3 border border-slate-200 px-5 py-3 rounded-lg text-slate-700"
          >
            Ver funcionalidades
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
          <Info label="Sincronização" value="Em tempo real" />
          <Info label="Segurança" value="Autenticação forte" />
          <Info label="Histórico" value="Detalhado" />
          <Info label="Escalável" value="Infra confiável" />
        </div>
      </div>

      <HeroIllustration />
    </section>
  );
};

export default Hero;
