import Image from 'next/image';
import { Button } from '../components/Button';

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative h-screen flex flex-col overflow-hidden"
    >
      {/* Hero Background Image - Otimizado para responsividade */}
        <Image
          src="/image/image-hero.jpg"
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-center -z-10"
          sizes="100vw"
        />
        <Image
          src="/image/cloud3.svg"
          alt="Cloud Transition"
          width={1920}
          height={400}
                    className="absolute -bottom-1 left-0 w-full h-auto -z-4"
        />
        {/* Overlay para contraste do texto */}
        <div className="absolute inset-0 bg-black/50 -z-5"></div>
        
      {/* Content - Centralizado no espaço restante */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container-max section-padding text-center relative z-10 mt-8">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 md:mb-8 tracking-tight px-4"
              data-aos="zoom-in"
            >
              Desenvolvendo todo o{' '}
              <span className="text-primary-600">
                potencial{' '}
              </span>
                do seu filho
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl lg:text-2xl text-neutral-100 mb-6 md:mb-8 font-light leading-relaxed max-w-4xl mx-auto drop-shadow-md px-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              A Crecei oferece ensino de alta qualidade e suporte personalizado para cada aluno, preparando-os para o sucesso acadêmico e social.
            </p>

            {/* CTA Button - Enhanced */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="400"
              className="px-4"
            >
              <Button text="Entre em contato" href="#contact-form" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixo no fundo */}
      <div 
        className="relative z-10 pb-8 md:pb-12 flex justify-center flex-shrink-0"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="flex flex-col items-center gap-3 text-neutral-300 scroll-indicator cursor-pointer hover:text-primary-400 transition-colors duration-300">
          <span className="text-xs md:text-sm font-light tracking-wide">
            Role para baixo
          </span>
          <div className="w-6 h-10 border-2 border-primary-500/60 rounded-full flex justify-center p-1 relative hover:border-primary-400/80 transition-colors duration-300">
            <div className="w-1 h-3 bg-primary-500 rounded-full scroll-indicator-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}