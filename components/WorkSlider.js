import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper";

import Image from "next/image";

import { BsArrowRight } from 'react-icons/bs';

// data
const workSlides = {
  slides: [
    {
      desktop: [
        {
          title: 'title',
          path: '/thumb1.jpg',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
        },
      ],
      mobile: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        }
      ],
    },
    {
      desktop: [
        {
          title: 'title',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
        },
      ],
      mobile: [
        {
          title: 'title',
          path: '/thumb1.jpg',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          about: 'weiwe ihw iouwhe oiwe howeuihdweio weiosoic iocweiou chweouifh iocwe iofw io',
          link: '/',
        }
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <>
              {/* desktop */}
              <div className="hidden sm:grid grid-cols-2 grid-rows-2 gap-4">
                {slide.desktop.map((image, index) => {
                  return (
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        <Image src={image.path} width={500} height={300} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-90 transition-all duration-300" />
                        <div className="absolute translate-y-[200px] group-hover:translate-y-0 transition-all duration-500 p-4 h-full flex flex-col justify-between">
                          <div>
                            <h4 className="font-bold text-lg">{image.title}</h4>
                            <p className="text-white">{image.about}</p>
                          </div>
                          <a href={image.link}>
                            <div className="flex items-center gap-x-2 text-[13px]">
                              <div className="delay-100">Github Link</div>
                              <div>
                                <BsArrowRight />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* mobile */}
              <div className="sm:hidden grid grid-cols-1 grid-rows-2 gap-4 cursor-pointer">
                {slide.mobile.map((image, index) => {
                  return (
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        <Image src={image.path} width={500} height={300} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300" />
                        <div className="absolute translate-y-[200px] group-hover:translate-y-0 transition-all duration-500 left-4 top-4">
                          <h4 className="font-bold text-lg">{image.title}</h4>
                          <p className="text-white">{image.about}</p>
                          <a href={image.link}>
                            <div className="flex items-center gap-x-2 text-[13px]">
                              <div className="delay-100">Github Link</div>
                              <div>
                                <BsArrowRight />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;
