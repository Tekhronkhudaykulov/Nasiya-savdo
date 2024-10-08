// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./banner.scss";
// import { Shimmer } from "react-shimmer";
import { Image } from "antd";

const Banner = () => {
  return (
    <Swiper
      className="swiper-arrow md:rounded-[20px] rounded-[10px] mt-[10px]"
      loop
      speed={1500}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
      }}
    >
      {/* <SwiperSlide>
        <Skeleton
          paragraph={{ rows: 0 }}
          className="md:h-[400px] h-[185px] [&>div>h3]:!h-full [&>div>h3]:!w-full"
        />
      </SwiperSlide> */}
      <SwiperSlide className="cursor-pointer">
        <div className="block aspect-[2/1] md:aspect-[3.4/1]">
          <Image
            className="md:!rounded-[20px] rounded-[10px] !h-full object-cover"
            src="https://images.uzum.uz/cq1uu8j5qt1gj8ddqckg/main_page_banner.jpg"
            rootClassName="h-full w-full"
          >
            <LazyLoadImage
              effect="opacity"
              alt=""
              className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[20px]"
              src="https://images.uzum.uz/cq1uu8j5qt1gj8ddqckg/main_page_banner.jpg"
              wrapperClassName="w-full h-full"
            />
          </Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer">
        <div className="block aspect-[2/1] md:aspect-[3.4/1]">
          <Image
            className="md:!rounded-[20px] rounded-[10px] !h-full object-cover"
            src="https://images.uzum.uz/cq1uu8j5qt1gj8ddqckg/main_page_banner.jpg"
            rootClassName="h-full w-full"
          >
            <LazyLoadImage
              effect="opacity"
              alt=""
              className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[20px]"
              src="https://images.uzum.uz/cq1uu8j5qt1gj8ddqckg/main_page_banner.jpg"
              wrapperClassName="w-full h-full"
            />
          </Image>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
