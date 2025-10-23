'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { BsBook, BsCalculator, BsPalette, BsPeopleFill, BsMusicNoteBeamed, BsTree, BsHeart, BsTranslate } from 'react-icons/bs';

// Import Swiper styles
import 'swiper/css';

interface Program {
  iconName: string;
  title: string;
  description: string;
  color: string;
}

interface ProgramsCarouselProps {
  programs: Program[];
}

const iconMap = {
  BsBook,
  BsCalculator,
  BsPalette,
  BsPeopleFill,
  BsMusicNoteBeamed,
  BsTree,
  BsHeart,
  BsTranslate,
};

export function ProgramsCarousel({ programs }: ProgramsCarouselProps) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        className="programs-swiper !py-8"
      >
        {programs.map((program, index) => {
          const Icon = iconMap[program.iconName as keyof typeof iconMap];
          
          return (
            <SwiperSlide key={`${program.iconName}-${index}`}>
              <div className="h-full p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                      program.color === 'blue' ? 'bg-blue-100' : 'bg-yellow-100'
                    }`}
                  >
                    <Icon
                      className={`w-10 h-10 ${
                        program.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
