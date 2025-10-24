'use client';

import { useState } from 'react';
import { BsChevronDown, BsChevronUp, BsArrowRight, BsQuestionCircle } from 'react-icons/bs';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Qual é a proporção aluno-professor?',
      answer: 'Mantemos uma proporção de no máximo 15 alunos por professor, garantindo atenção individualizada e suporte personalizado para cada criança.',
    },
    {
      question: 'Quais atividades extracurriculares vocês oferecem?',
      answer: 'Oferecemos uma variedade de atividades como música, dança, artes plásticas, esportes e idiomas, todas integradas ao currículo para desenvolvimento integral.',
    },
    {
      question: 'Como posso matricular meu filho?',
      answer: 'O processo é simples: preencha o formulário de contato, agende uma visita e nossa equipe guiará você por todas as etapas da matrícula.',
    },
    {
      question: 'Quais são os horários de funcionamento?',
      answer: 'Funcionamos de segunda a sexta-feira, das 7h às 18h, com opções de horário integral ou meio período conforme a necessidade da família.',
    },
    {
      question: 'Vocês oferecem refeições?',
      answer: 'Sim, oferecemos refeições balanceadas e saudáveis preparadas por nutricionistas, seguindo todas as normas de higiene e segurança alimentar.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      className="bg-white py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-50/30 rounded-full blur-lg"></div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossa escola e processo de matrícula.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6" data-aos="fade-up" data-aos-delay="200">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <BsQuestionCircle className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div className="transition-transform duration-500 ease-in-out group-hover:scale-110">
                  {openIndex === index ? (
                    <BsChevronUp className="w-7 h-7 text-blue-600 flex-shrink-0" />
                  ) : (
                    <BsChevronDown className="w-7 h-7 text-blue-600 flex-shrink-0" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-600 mb-6">Ainda tem dúvidas? Entre em contato conosco!</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Fale Conosco</span>
            <BsArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}