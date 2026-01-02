import { Star, Heart } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Terapêutico
 * Página de Testemunhos Anónimos
 */

interface Testimonial {
  name: string;
  location: string;
  story: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos M.",
    location: "São Paulo, Brasil",
    story:
      "Passei 15 anos lutando sozinho com comportamentos que me destruíam. Tentei parar inúmeras vezes, mas sempre recaía. Quando encontrei SA, descobri que não estava sozinho. O programa de 12 passos me ajudou a entender as raízes do meu problema e a desenvolver uma conexão espiritual que mudou minha vida. Hoje, tenho um relacionamento saudável e uma paz que nunca pensei ser possível.",
    highlight: "Descobri que não estava sozinho e que a recuperação era possível.",
  },
  {
    name: "Marina L.",
    location: "Rio de Janeiro, Brasil",
    story:
      "Como mulher, sentia-me muito isolada. Pensava que era a única mulher com esse problema. Nas reuniões de SA, conheci outras mulheres com histórias semelhantes e encontrei esperança. O apoio da irmandade foi fundamental. Aprendi a amar a mim mesma e a estabelecer limites saudáveis. Hoje, sou livre.",
    highlight: "Aprendi que sou digna de amor e recuperação.",
  },
  {
    name: "Roberto S.",
    location: "Minas Gerais, Brasil",
    story:
      "Meu vício sexual estava destruindo meu casamento e minha carreira. Eu era uma pessoa diferente - alguém que não reconhecia. SA me deu ferramentas práticas e apoio genuíno. Através dos 12 passos, consegui reparar meu relacionamento com minha esposa e reconstruir minha vida. Hoje, trabalho como padrinho e ajudo outros homens a encontrar o mesmo caminho.",
    highlight: "Recuperei minha vida e meu relacionamento.",
  },
  {
    name: "Juliana P.",
    location: "Brasília, Brasil",
    story:
      "Comecei a participar de SA com muito medo e vergonha. Mas a irmandade me recebeu com braços abertos. Ninguém julgou, apenas apoiou. Aprendi que meu comportamento compulsivo era uma forma de lidar com trauma e ansiedade. Com o tempo e o trabalho dos passos, consegui processar essas emoções de forma saudável. Agora, tenho uma vida plena.",
    highlight: "Encontrei cura emocional e paz interior.",
  },
  {
    name: "Fernando T.",
    location: "Salvador, Brasil",
    story:
      "Eu era viciado em pornografia e comportamentos sexuais compulsivos. Isso afetava minha autoestima e meus relacionamentos. SA me mostrou que havia esperança. O programa não é sobre perfeição, é sobre progresso. Tive recaídas, mas a irmandade nunca me abandonou. Hoje, sou uma pessoa diferente - mais íntegra, mais honesta comigo mesmo.",
    highlight: "Aprendi que progresso, não perfeição, é o objetivo.",
  },
  {
    name: "Beatriz G.",
    location: "Curitiba, Brasil",
    story:
      "Meu vício sexual começou como forma de escapar da realidade. Quando cheguei a SA, estava completamente perdida. As mulheres do grupo me abraçaram e me mostraram que era possível recuperação. Aprendi a lidar com meus sentimentos de forma saudável. Hoje, tenho relacionamentos significativos e uma vida que vale a pena viver.",
    highlight: "Descobri que mereço uma vida saudável e feliz.",
  },
];

export default function Testimonials() {
  return (
    <>

      {/* Header */}
      <section className="bg-gradient-to-b from-[#F5F7FA] to-white py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#2C3E50] mb-4">Histórias de Recuperação</h1>
          <p className="text-xl text-[#7A8FA3] max-w-3xl">
            Conheça histórias reais de pessoas que encontraram esperança e recuperação através de Sexólicos Anónimos. Os nomes são fictícios para proteger o anonimato, mas as histórias são verdadeiras.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#4A90A4] text-[#4A90A4]" />
                  ))}
                </div>

                {/* Highlight */}
                <p className="text-lg font-semibold text-[#2C3E50] mb-4 italic">
                  "{testimonial.highlight}"
                </p>

                {/* Story */}
                <p className="text-[#7A8FA3] mb-6 leading-relaxed">{testimonial.story}</p>

                {/* Author */}
                <div className="border-t border-[#E8EDF3] pt-4">
                  <p className="font-semibold text-[#2C3E50]">{testimonial.name}</p>
                  <p className="text-sm text-[#7A8FA3]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-[#4A90A4] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">A sua Recuperação Também é Possível</h2>
          <p className="text-lg text-[#7A8FA3] mb-8">
            Estas histórias mostram que não importa o quão difícil seja a sua situação, a recuperação é possível. 
            Você não está sozinho. Milhares de pessoas encontraram esperança e liberdade através de SA.
          </p>
          <a
            href="https://wa.me/5599984687433?text=Olá,%20gostaria%20de%20participar%20de%20uma%20reunião%20de%20SA%20Porto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Comece a sua Jornada Hoje
          </a>
        </div>
      </section>

    </>
  );
}
