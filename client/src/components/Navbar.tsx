import { Heart, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const isHomePage = location === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      {isHomePage && (
        <>
          <a href="#sobre" className="text-lg text-gray-700 hover:text-[#4A90A4]" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </a>
          <a href="#reunioes" className="text-lg text-gray-700 hover:text-[#4A90A4]" onClick={() => setIsMenuOpen(false)}>
            Reuniões
          </a>
        </>
      )}
      <Link href="/">
        <a className="text-lg text-gray-700 hover:text-[#4A90A4]" onClick={() => setIsMenuOpen(false)}>Home</a>
      </Link>
      <Link href="/testemunhos">
        <a className="text-lg text-gray-700 hover:text-[#4A90A4]" onClick={() => setIsMenuOpen(false)}>Testemunhos</a>
      </Link>
      <Link href="/faq">
        <a className="text-lg text-gray-700 hover:text-[#4A90A4]" onClick={() => setIsMenuOpen(false)}>FAQ</a>
      </Link>
      <Link href="/recursos">
        <a className="text-lg text-gray-700 hover:text-[#4A90A4]" onClick={() => setIsMenuOpen(false)}>Recursos</a>
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E8EDF3] shadow-sm">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#4A90A4] flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#2C3E50]">SA Portugal</h1>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {isHomePage && (
            <>
              <a href="#sobre" className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">Sobre</a>
              <a href="#reunioes" className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">Reuniões</a>
            </>
          )}
          <Link href="/"><a className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">Home</a></Link>
          <Link href="/testemunhos"><a className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">Testemunhos</a></Link>
          <Link href="/faq"><a className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">FAQ</a></Link>
          <Link href="/recursos"><a className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">Recursos</a></Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
}
