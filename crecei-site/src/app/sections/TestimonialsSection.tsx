import { TestimonialsCarousel } from '@/app/components/client/TestimonialsCarousel';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Mãe de João, 5 anos',
      testimonial: 'A Crecei proporcionou um ambiente incrível para meu filho — seguro, acolhedor e estimulante. Os professores realmente sabem como apoiar o potencial único de cada criança.',
      image: '/image/testimonial1.jpg', // Placeholder
    },
    {
      name: 'Carlos Santos',
      role: 'Pai de Ana, 6 anos',
      testimonial: 'Estou impressionado com o desenvolvimento da minha filha. A escola foca não só no acadêmico, mas também no crescimento emocional e social.',
      image: '/image/testimonial2.jpg', // Placeholder
    },
    {
      name: 'Fernanda Oliveira',
      role: 'Mãe de Pedro, 4 anos',
      testimonial: 'A Crecei é mais do que uma escola, é uma família. Meu filho adora ir para a aula todos os dias e aprende brincando.',
      image: '/image/testimonial3.jpg', // Placeholder
    },
      {
      name: 'Fernanda Oliveira',
      role: 'Mãe de Pedro, 4 anos',
      testimonial: 'A Crecei é mais do que uma escola, é uma família. Meu filho adora ir para a aula todos os dias e aprende brincando.',
      image: '/image/testimonial3.jpg', // Placeholder
    },
      {
      name: 'Fernanda Oliveira',
      role: 'Mãe de Pedro, 4 anos',
      testimonial: 'A Crecei é mais do que uma escola, é uma família. Meu filho adora ir para a aula todos os dias e aprende brincando.',
      image: '/image/testimonial3.jpg', // Placeholder
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          O Que os Pais Dizem Sobre a Crecei
        </h2>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}