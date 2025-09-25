const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-sm">
        <div className="text-blue-100">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">DailyGoals</span> • Todos os direitos
          reservados
        </div>

        <div className="mt-3 sm:mt-0">
          Contato:{" "}
          <a
            href="mailto:allyson.fernandes@alunos.ufersa.edu.br"
            className="text-white font-medium hover:text-blue-200 transition"
          >
            allyson.fernandes@alunos.ufersa.edu.br
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
