import Image from 'next/image';
export function GallerySection() {
  const images = [
    {
      src: 'https://picsum.photos/800/600?random=1',
      alt: 'Sala de aula vibrante',
      title: 'Salas de Aula',
      span: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2',
    },
    {
      src: 'https://picsum.photos/400/300?random=2',
      alt: 'Atividades recreativas',
      title: 'Atividades Recreativas',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://picsum.photos/400/300?random=3',
      alt: 'Parquinho seguro',
      title: 'Parquinho',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://picsum.photos/800/300?random=4',
      alt: 'Momentos de aprendizado',
      title: 'Aprendizado',
      span: 'col-span-2 row-span-1 md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://picsum.photos/400/300?random=5',
      alt: 'Ambiente acolhedor',
      title: 'Ambiente Acolhedor',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://picsum.photos/400/300?random=6',
      alt: 'Comunidade escolar',
      title: 'Comunidade',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://picsum.photos/400/300?random=7',
      alt: 'Atividades artísticas',
      title: 'Artes',
      span: 'col-span-3 row-span-1',
    },
  ];

  return (
    <section
      id="gallery-section"
      className="bg-white py-24 lg:py-32 relative overflow-hidden flex flex-col lg:flex-row justify-start items-center"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-100 rounded-full translate-x-12 translate-y-12 opacity-50"></div>

        <div className="max-w-xl mx-auto me-10">
          <h2 className="md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Um Olhar Sobre <br/>a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
               Vida na Crecei
            </span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
            Explore nossas salas vibrantes, atividades envolventes e ambiente acolhedor onde seu filho cresce e aprende todos os dias.
          </p>
        </div>
        <div className="w-[60rem] ms-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[200px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer ${image.span}`}
                data-aos="zoom-in"
                data-aos-delay={300 + index * 100}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}