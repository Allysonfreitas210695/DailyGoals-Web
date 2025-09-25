import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center font-bold">
            DG
          </div>
          <div>
            <h1 className="text-lg font-semibold">DailyGoals</h1>
            <p className="text-xs text-blue-100">
              Organize. Sincronize. Conquiste.
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm d-flex items-center">
          <a href="#features" className="hover:underline">
            Funcionalidades
          </a>
          <a href="#benefits" className="hover:underline">
            Benefícios
          </a>
          <a
            href="#cta"
            className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md shadow hover:bg-blue-50 transition"
          >
            Baixar / Testar
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-700 px-6 pb-4 space-y-3 text-sm">
          <a href="#features" className="block hover:underline">
            Funcionalidades
          </a>
          <a href="#benefits" className="block hover:underline">
            Benefícios
          </a>
          <a
            href="#cta"
            className="block text-center bg-white text-blue-600 font-medium px-4 py-2 rounded-md shadow hover:bg-blue-50 transition"
          >
            Baixar / Testar
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
