import { Button } from '../components/Button';
import { ProgramsCarousel } from '../components/ProgramsCarousel';

export function ProgramsSection() {
  const programs = [
    {
      iconName: 'BsBook',
      title: 'Leitura e Escrita',
      description: 'Desenvolvemos habilidades fundamentais de alfabetização com métodos lúdicos e personalizados.',
      color: 'blue',
    },
    {
      iconName: 'BsCalculator',
      title: 'Matemática',
      description: 'Exploramos conceitos matemáticos através de jogos e atividades práticas do dia a dia.',
      color: 'yellow',
    },
    {
      iconName: 'BsPalette',
      title: 'Artes',
      description: 'Estimulamos a criatividade e expressão artística com diversas técnicas e materiais.',
      color: 'blue',
    },
    {
      iconName: 'BsPeopleFill',
      title: 'Habilidades Sociais',
      description: 'Promovemos o desenvolvimento emocional e social através de atividades em grupo.',
      color: 'yellow',
    },
    {
      iconName: 'BsMusicNoteBeamed',
      title: 'Música',
      description: 'Introduzimos o mundo da música através de ritmos, melodias e instrumentos musicais.',
      color: 'blue',
    },
    {
      iconName: 'BsTree',
      title: 'Ciências',
      description: 'Exploramos o mundo natural através de experimentos e observações científicas.',
      color: 'yellow',
    },
    {
      iconName: 'BsHeart',
      title: 'Valores e Ética',
      description: 'Ensinamos princípios fundamentais como respeito, honestidade e empatia.',
      color: 'blue',
    },
    {
      iconName: 'BsTranslate',
      title: 'Inglês',
      description: 'Introduzimos o idioma inglês de forma natural e divertida desde cedo.',
      color: 'yellow',
    },
  ];

  return (
    <section
      id="programs-section"
      className="bg-gray-50 py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full translate-x-20 -translate-y-20 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100 rounded-full -translate-x-16 translate-y-16 opacity-30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
            Programas Completos para{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Cada Criança
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Nossos programas são pensados para desenvolver as crianças de forma acadêmica, social e emocional. Cada aluno recebe orientação de acordo com suas necessidades e ritmo de aprendizado.
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-12">
          <ProgramsCarousel programs={programs} />
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <Button text="Saiba Mais Sobre Nosso Currículo" href="#curriculum" />
        </div>
      </div>
    </section>
  );
}
