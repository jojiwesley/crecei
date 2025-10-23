import Image from 'next/image';
import { BsHeart, BsShieldCheck, BsPeople } from 'react-icons/bs';

export function AboutSection() {
  const values = [
    {
      icon: BsHeart,
      title: 'Aprendizado personalizado<br />e acompanhamento próximo',
      description: 'Cada criança recebe atenção individualizada para desenvolver seu potencial único.',
    },
    {
      icon: BsShieldCheck,
      title: 'Ambiente seguro,<br />acolhedor e estimulante',
      description: 'Um espaço onde as crianças se sentem protegidas e motivadas a explorar.',
    },
    {
      icon: BsPeople,
      title: 'Professores qualificados<br />com metodologias modernas',
      description: 'Equipe dedicada com formação especializada em educação infantil contemporânea.',
    },
  ];

  return (
    <section
      id="about-section"
      className="bg-white py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorative elements for lightness */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-100 rounded-full translate-x-12 translate-y-12 opacity-50"></div>

            <div className="container-max section-padding relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div data-aos="fade-right" className="space-y-8">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Uma Escola Onde as{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Crianças Crescem
              </span>
              , Aprendem e Prosperam
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Na Crecei, cada criança recebe atenção personalizada em um ambiente seguro, inspirador e estimulante. Nossos métodos modernos de ensino promovem o desenvolvimento integral — acadêmico, social e emocional — para que seu filho floresça.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3" dangerouslySetInnerHTML={{ __html: value.title }}></h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div data-aos="fade-left" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/about-image.jpg" // Placeholder, adjust as needed
                alt="Professores e alunos da Crecei"
                width={600}
                height={400}
                className="object-cover w-full h-96 lg:h-[500px]"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full opacity-80"></div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
