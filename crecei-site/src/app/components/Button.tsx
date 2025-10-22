import { BsArrowRight } from 'react-icons/bs';

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
}

export function Button({ text, href, className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-primary-500 ${className}`}
    >
      <span>{text}</span>
      <BsArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
    </a>
  );
}