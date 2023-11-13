import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { RxArrowTopRight } from "react-icons/rx";

import { FaLaptopCode } from "react-icons/fa6";
import { PiCodeBold } from "react-icons/pi";
import { TbServerCog } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import Image from "next/image";

import { Pagination } from "swiper";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/sabernet.jpg",
          link: "https://sabernet.vercel.app",
        },
        {
          title: "title",
          path: "/crp.jpg",
          link: "https://crypto-stats-gamma.vercel.app/",
        },
        {
          title: "title",
          path: "/uber.jpg",
          link: "https://uber-clone-app-two.vercel.app/",
        },
        {
          title: "title",
          path: "/port.jpg",
          link: "https://sabersakin.github.io/portfolio1/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/health.jpg",
          link: "https://github.com/saberSakin/PatientHealthMonitoringSystem",
        },
        {
          title: "title",
          path: "/panda.jpg",
          link: "https://github.com/saberSakin",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://www.google.com/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://www.google.com/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    onClick={() => handleImageClick(image.link)}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent
                      via-[#8438e8] to-[#3e22bd8c] opacity-0 group-hover:opacity-80 transition-all duration-700"
                      ></div>
                      {/* image */}
                      <div
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                      group-hover:xl:-translate-y-20 transition-all duration-300 "
                      >
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <RxArrowTopRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default WorkSlider;
