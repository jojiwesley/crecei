import { BsArrowRight, BsHeart, BsShieldCheck, BsPeople } from 'react-icons/bs';

export function ContactSection() {
  return (
    <section
      id="cta-section"
      className=" py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Decorative elements for modern feel */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>

        <div className="max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Form */}
            <div data-aos="fade-right" className="order-2 lg:order-1">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/30">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Preencha o Formulário
                </h3>
                <form className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Digite o nome completo"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Child Age Field */}
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Idade da Criança *
                    </label>
                    <input
                      type="number"
                      id="childAge"
                      name="childAge"
                      placeholder="Ex: 5"
                      min="1"
                      max="18"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Contact Field */}
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone ou E-mail *
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      placeholder="Ex: (11) 99999-9999 ou email@exemplo.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Conte-nos um pouco sobre seu filho ou suas dúvidas..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <span>Enviar Formulário</span>
                      <BsArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Side: Content */}
            <div data-aos="fade-left" className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Garanta a Vaga do{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Seu Filho Hoje
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                Preencha o formulário abaixo. Nossa equipe responderá rapidamente para guiá-lo no processo de matrícula.
              </p>

              {/* Icons for trust */}
              <div className="flex justify-center lg:justify-start gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <BsHeart className="w-12 h-12 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-700">Acolhimento</span>
                </div>
                <div className="flex flex-col items-center">
                  <BsShieldCheck className="w-12 h-12 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-700">Segurança</span>
                </div>
                <div className="flex flex-col items-center">
                  <BsPeople className="w-12 h-12 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-700">Comunidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}