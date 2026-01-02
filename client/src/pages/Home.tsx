import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart, Users, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import ContactForm from "@/components/ContactForm";

/**
 * Design Philosophy: Minimalismo Terapêutico
 * - Espaço generoso e respiro visual para reduzir ansiedade
 * - Tipografia clara (Poppins para títulos, Lora para corpo)
 * - Paleta neutra com acento verde-azulado (esperança, cura)
 * - Acessibilidade como prioridade
 */

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#F5F7FA]">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/hero-hope.jpg"
            alt="Esperança e recuperação"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C3E50] mb-6 leading-tight">
              Comece a Sua Jornada de Recuperação
            </h2>
            <p className="text-xl text-[#7A8FA3] mb-8 leading-relaxed">
              Sexólicos Anónimos é uma irmandade de apoio onde homens e mulheres partilham experiência, força e esperança para resolver os seus problemas com a luxúria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg"
                onClick={() => document.getElementById("reunioes")?.scrollIntoView({ behavior: "smooth" })}
              >
                Encontre uma Reunião
              </Button>
              <Button
                variant="outline"
                className="border-[#4A90A4] text-[#4A90A4] hover:bg-[#F5F7FA] px-8 py-6 text-lg rounded-lg"
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-[#2C3E50] mb-6">O que é Sexólicos Anónimos?</h3>
              <p className="text-lg text-[#7A8FA3] mb-6 leading-relaxed">
              Sexólicos Anônimos é uma irmandade de homens e mulheres que partilham a sua experiência, força e esperança para resolver o seu problema comum e ajudarem outros a recuperar. O único requisito para se ser membro é o desejo de libertar-se da luxúria e de alcançar a sobriedade sexual. Não há taxas nem mensalidades para se tornar membro de SA; somos auto-sustentáveis por meio das nossas próprias contribuições.
              </p>
              <p className="text-lg text-[#7A8FA3] mb-6 leading-relaxed">
              SA não é afiliado a nenhuma seita, denominação, movimento político, organização ou instituição de qualquer espécie; não deseja envolver-se em controvérsias; não apoia nem se opõe a qualquer causa. O nosso propósito primordial é permanecermos sexualmente sóbrios e ajudar outros sexólicos a alcançar a sobriedade sexual.
              </p>
              <p className="text-lg text-[#7A8FA3] mb-6 leading-relaxed">
              Somos um programa de 12 passos baseado em princípios espirituais que levam a uma transformação pessoal profunda.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-[#4A90A4] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-2">Irmandade de Apoio</h4>
                    <p className="text-[#7A8FA3]">Encontre pessoas que entendem o seu problema e estão na mesma jornada.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Lightbulb className="w-6 h-6 text-[#4A90A4] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-2">Programa Comprovado</h4>
                    <p className="text-[#7A8FA3]">Os 12 passos têm ajudado milhares de pessoas a alcançar sobriedade sexual.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-[#4A90A4] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-2">Confidencialidade Total</h4>
                    <p className="text-[#7A8FA3]">O seu anonimato é protegido. Ninguém vai saber que você está aqui.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-8">
                <Button asChild className="bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg">
                  <Link href="/sou-sexolico">Sou Sexólico?</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#4A90A4] text-[#4A90A4] hover:bg-[#F5F7FA] px-6 py-3 rounded-lg transition-all">
                  <Link href="/12-passos">Os 12 Passos</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/community-support.jpg"
                alt="Irmandade de apoio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="/growth-journey.jpg"
                alt="Jornada de crescimento"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold text-[#2C3E50] mb-6">A Sua Jornada de Recuperação</h3>
              <p className="text-lg text-[#7A8FA3] mb-6 leading-relaxed">
                A recuperação é uma jornada pessoal. Cada pessoa progride com o apoio de uma irmandade que entende verdadeiramente pelo que está a passar.
              </p>
              <p className="text-lg text-[#7A8FA3] mb-8 leading-relaxed">
                Os 12 Passos levam-nos a uma transformação espiritual profunda. Vai aprender a:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="text-[#4A90A4] font-bold">✓</span>
                  <span className="text-[#7A8FA3]">Reconhecer e compreender o seu problema</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A90A4] font-bold">✓</span>
                  <span className="text-[#7A8FA3]">Desenvolver uma conexão espiritual</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A90A4] font-bold">✓</span>
                  <span className="text-[#7A8FA3]">Reparar relacionamentos danificados</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A90A4] font-bold">✓</span>
                  <span className="text-[#7A8FA3]">Viver uma vida livre e autêntica</span>
                </li>
              </ul>
              {/*<Button className="bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg">
                Comece Agora
              </Button>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section id="reunioes" className="py-24 bg-[#F5F7FA]">
        <div className="container max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-[#2C3E50] mb-4 text-center">Reuniões em Portugal</h3>
          <p className="text-lg text-[#7A8FA3] text-center mb-16 max-w-2xl mx-auto">
            Temos reuniões regulares onde se pode conectar com outras pessoas e começar a sua recuperação. Todas as reuniões são confidenciais e acolhedoras.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Meeting 1 */}
            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">Reunião SA Portugal - Segunda-feira</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Reunião Online</p>
                    <p className="text-[#7A8FA3]">Via Zoom</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Segundas-feiras</p>
                    <p className="text-[#7A8FA3]">20:00</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#E8EDF3] pt-6">
                <Button
                  onClick={() => document.getElementById("contato-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-6 py-3 text-sm rounded-lg transition-all hover:shadow-lg"
                >
                  Pedir Link
                </Button>
              </div>
            </div>

            {/* Meeting 2 */}
            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">Reunião SA Portugal - Quarta-feira</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Reunião Online</p>
                    <p className="text-[#7A8FA3]">Via Zoom</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Quartas-feiras</p>
                    <p className="text-[#7A8FA3]">20:30</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#E8EDF3] pt-6">
                <Button
                  onClick={() => document.getElementById("contato-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-6 py-3 text-sm rounded-lg transition-all hover:shadow-lg"
                >
                  Pedir Link
                </Button>
              </div>
            </div>

            {/* Meeting 3 - In-person */}
            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">Reunião SA Portugal - Sábado (Presencial no Porto)</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Reunião Presencial</p>
                    <p className="text-[#7A8FA3]">Morada sob requisição, Porto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Sábados</p>
                    <p className="text-[#7A8FA3]">11:00</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#E8EDF3] pt-6">
                <Button
                  onClick={() => document.getElementById("contato-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-6 py-3 text-sm rounded-lg transition-all hover:shadow-lg"
                >
                  Mais Informações
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato-form" className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="jornada" className="py-20 bg-[#F5F7FA]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 text-center">A Sua Jornada de Recuperação</h2>
          <p className="text-lg text-[#7A8FA3] text-center mb-12">
            Tem dúvidas? Quer saber mais? Estamos aqui para ajudar. Não hesite em nos contactar.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] text-center hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-[#4A90A4] mx-auto mb-4" />
              <h4 className="font-semibold text-[#2C3E50] mb-2">Email</h4>
              <a
                href="mailto:sarecoveryporto@gmail.com"
                className="text-[#4A90A4] hover:text-[#3A7A94] transition-colors"
              >
                sarecoveryporto@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-[#4A90A4] mx-auto mb-4" />
              <h4 className="font-semibold text-[#2C3E50] mb-2">Telefone</h4>
              <a
                href="tel:+351925381811"
                className="text-[#4A90A4] hover:text-[#3A7A94] transition-colors"
              >
                +351 925381811
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] text-center hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[#4A90A4] mx-auto mb-4" />
              <h4 className="font-semibold text-[#2C3E50] mb-2">Confidencialidade</h4>
              <p className="text-[#7A8FA3]">O seu anonimato é garantido</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-12 border border-[#E8EDF3]">
            <h4 className="text-2xl font-bold text-[#2C3E50] mb-6">Mensagem de Esperança</h4>
            <p className="text-lg text-[#7A8FA3] leading-relaxed mb-6">
              Se está a lutar contra comportamentos sexuais compulsivos, saiba que não está sozinho. Milhares de pessoas encontraram esperança e recuperação através de Sexólicos Anónimos.
            </p>
            <p className="text-lg text-[#7A8FA3] leading-relaxed">
              O único requisito para se ser membro é o desejo de parar. Não há julgamentos, apenas compreensão mútua e apoio genuíno. A sua jornada de recuperação pode começar hoje.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
