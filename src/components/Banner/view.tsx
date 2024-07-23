// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./banner.scss";
// import { Shimmer } from "react-shimmer";
import { Image, Skeleton } from "antd";

const Banner = () => {
  return (
    <Swiper
      navigation
      className="swiper-arrow rounded-[20px] mt-[10px]"
      loop
      speed={1500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        0: {
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <Skeleton
          paragraph={{ rows: 0 }}
          className="md:h-[400px] h-[185px] [&>div>h3]:!h-full [&>div>h3]:!w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer">
        <div className="block md:h-[400px] h-[185px]">
          <Image
            className="!rounded-[20px] !h-full object-cover"
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
