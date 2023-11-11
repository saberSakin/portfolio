import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { RxArrowTopRight } from "react-icons/rx";

import { FaLaptopCode } from "react-icons/fa6";
import { PiCodeBold } from "react-icons/pi";
import { TbServerCog } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";

import { Pagination } from "swiper";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default WorkSlider;

// <div
//               className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
//        sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
//         transition-all duration-300"
//             >
//               {/*icon*/}
//               <div className="text-4xl text-accent mb-4">{item.icon}</div>
//               {/*titile and des*/}
//               <div className="mb-8">
//                 <div className="mb-2 text-lg">{item.title}</div>
//                 <p className="max-w-[350px] loading-normal">
//                   {item.description}
//                 </p>
//               </div>
//               {/*arrow*/}
//               <div className="text-3xl">
//                 <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
//               </div>
//             </div>
