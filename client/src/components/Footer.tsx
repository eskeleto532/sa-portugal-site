import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#4A90A4] flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <h5 className="font-bold">SA Portugal</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Uma comunidade de apoio para recuperação de comportamentos sexuais compulsivos.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Navegação</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/testemunhos" className="hover:text-white transition-colors">Testemunhos</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/recursos" className="hover:text-white transition-colors">Recursos</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Recursos</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="https://www.sa.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SA Internacional</a></li>
              <li><a href="https://www.sabrasil.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SA Brasil</a></li>
              <li><a href="https://saaportugal.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SAA Portugal</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Contacto</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: sarecoveryporto@gmail.com</li>
              <li>Telefone: +351 925381811</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Sexólicos Anónimos Portugal. Todos os direitos reservados.</p>
          <p className="mt-2">O anonimato é a base espiritual de todas as nossas tradições.</p>
        </div>
      </div>
    </footer>
  );
}
