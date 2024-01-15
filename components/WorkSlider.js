import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper";

import Image from "next/image";

import { BsArrowRight } from 'react-icons/bs';

// data
const workSlides = [
  {
    desktop: [
      {
        title: 'Hack JMI',
        about: 'HackJMI is a long annual coding Hackathon of JMI. The challenge provides students the opportunity to mess with real-world problems.',
        githubLink: 'https://github.com/huzaifmalik786/Hack-JMI',
        liveLink: 'https://hackjmi-local.netlify.app/',
        path: '/hackJMI.png',
      },
      {
        title: 'Portfolio Webite',
        path: '/portfolio.png',
        about: 'Made with reactjs, the application can be used to showcase the portfolio of a person with some appealing animations.',
        githubLink: 'https://github.com/huzaifmalik786/Portfolio',
        liveLink: 'https://huzaifportfolio.netlify.app/',
      },
      {
        title: 'Flappy Bird Game',
        path: '/flappy.png',
        about: `The Flappy Bird game, developed with Python, captures the essence of simple yet addictive gameplay. In this, players navigate a small bird through a series of pipes by tapping the screen or pressing a key to make the bird flap its wings.`,
        githubLink: 'https://github.com/huzaifmalik786/Flappy-Bird-Game',
      },
      {
        title: 'Resume Builder',
        path: '/resumemaker.jpg',
        about: 'This platform empowers individuals to craft personalized resumes with ease. Users can seamlessly navigate through various sections, and move them around, all dynamically rendered with React components.',
        githubLink: 'https://github.com/huzaifmalik786/Resume-Maker',
        liveLink: 'https://resume-builder1.netlify.app/',
      },
    ],
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {workSlides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4">
              {slide.desktop.map((item, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group h-[200px] sm:h-[210px]">
                      <Image src={item.path} width={500} height={300} alt="" className="h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-l from-[#4a22bd] via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300" />
                      <div className="absolute translate-y-[200px] group-hover:translate-y-0 transition-all duration-500 p-4 h-full flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-lg">{item.title}</h4>
                          <p className="text-white text-sm">{item.about}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <a href={item.githubLink}>
                            <div className="flex items-center gap-x-2 text-[13px]">
                              <div className="delay-100">Github Link</div>
                              <div>
                                <BsArrowRight />
                              </div>
                            </div>
                          </a>
                          {item.liveLink &&
                            <a href={item.liveLink}>
                              <div className="flex items-center gap-x-2 text-[13px]">
                                <div className="delay-100">Live Link</div>
                                <div>
                                  <BsArrowRight />
                                </div>
                              </div>
                            </a>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* <div className="sm:hidden grid grid-cols-1 grid-rows-2 gap-4 cursor-pointer">
              {slide.mobile?.map((item, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group h-[200px]">
                      <Image src={item.path} width={500} height={300} alt="" className="h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-l from-[#4a22bd] via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300" />
                      <div className="absolute translate-y-[200px] group-hover:translate-y-0 transition-all duration-500 p-4 h-full flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-lg">{item.title}</h4>
                          <p className="text-white">{item.about}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <a href={item.githubLink}>
                            <div className="flex items-center gap-x-2 text-[13px]">
                              <div className="delay-100">Github Link</div>
                              <div>
                                <BsArrowRight />
                              </div>
                            </div>
                          </a>
                          {item.liveLink &&
                            <a href={item.link}>
                              <div className="flex items-center gap-x-2 text-[13px]">
                                <div className="delay-100">Live Link</div>
                                <div>
                                  <BsArrowRight />
                                </div>
                              </div>
                            </a>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div> */}
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;
