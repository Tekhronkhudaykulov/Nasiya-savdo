import { useRef, useState } from "react";
import { ASSETS } from "../../../assets/img/assets";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ProductSingleStar, Star } from "../../../assets/icon";
import ColorBox from "./ColorBox";
import SizeBox from "./SizeBox";
function SingleProductLeft({ setAboutPopUp }: { setAboutPopUp: any }) {
  const data = [
    { location: ASSETS.CardImg },
    { location: ASSETS.CardImg },
    { location: ASSETS.CardImg },
    { location: ASSETS.CardImg },
    { location: ASSETS.CardImg },
    { location: ASSETS.CardImg },
    { location: ASSETS.CardImg },
  ];

  const swiperRef = useRef<SwiperRef | null>(null);
  const [show, setShow] = useState(false);
  const handleButtonClick = (slideIndex: number) => {
    if (swiperRef?.current) {
      swiperRef?.current?.swiper?.slideTo(slideIndex);
    }
  };
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="w-full flex gap-[10px] max-h-[300px] xl:max-h-[470px] lg:max-h-[370px]">
          <Swiper
            className="w-[80px] h-full"
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={4.5}
            direction="vertical"
          >
            {data?.map((i, idx: number) => (
              <SwiperSlide
                key={idx}
                className="bg-[#EFEFEF] rounded-[12px] overflow-hidden"
                onClick={() => handleButtonClick(idx)}
              >
                <img
                  src={`${i.location}`}
                  className="h-full w-full cursor-pointer object-contain"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            loop={data.length > 1}
            className="h-full w-full rounded-[16px] overflow-hidden"
          >
            {data?.map((i, idx: number) => (
              <SwiperSlide className="bg-[#efefef] cursor-pointer" key={idx}>
                <img
                  src={`${i.location}`}
                  className="h-full w-full items-center rounded-lg object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-x-[4px]">
              <Star />
              <p className="text-gray text-[12px] font-[500]">
                4.9( 115 оценок ) Более 400 заказов
              </p>
            </div>
            <h1 className="text-mainBlack font-[500] text-[24px]">
              Сковорода антипригарная Elegant, с крышкой, гранитное покрытие,
              24, 26, 28 см
            </h1>
            <p className="text-gray text-[12px] font-[500]">
              Осталось: 12 штук
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-2">
              <p className="text-gray text-[12px] font-[500]">Цвет:</p>
              <div className="flex flex-wrap gap-[12px]">
                <ColorBox color={`bg-[#212121]`} />
                <ColorBox color={`bg-[#bda16a]`} />
                <ColorBox color={`bg-[#917dac]`} />
                <ColorBox color={`bg-[#aac5a3]`} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray text-[12px] font-[500]">Размер:</p>
              <div className="flex flex-wrap gap-[12px]">
                <SizeBox text="26 см" />
                <SizeBox text="32 см" />
                <SizeBox text="40 см" />
                <SizeBox text="48 см" />
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="text-[12px] rounded-[6px] text-[#03a5a5] flex gap-[6px] items-center p-[7px_16px] bg-[rgb(2,115,115,.15)]">
              <img
                className="w-[16px] h-[16px]"
                src={ProductSingleStar}
                alt="icon"
              />
              <span className="font-medium">Посмотреть отзывы</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border border-line p-[24px] rounded-[16px] flex flex-col gap-[32px] items-start">
        <div className="flex flex-col gap-[8px] items-start">
          <h3 className="text-mainBlack text-[16px] font-semibold">Описание</h3>
          <p
            className={`text-gray text-[14px] leading-[1.5] ${
              show ? "" : "text-hidden-7"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur. Risus vulputate tellus
            vestibulum tristique amet vitae aliquam faucibus. Tempor odio
            tincidunt volutpat ac luctus massa morbi. Sit volutpat ridiculus
            semper arcu diam platea dictum magna. Scelerisque nisi molestie eget
            dignissim. Fusce ac malesuada elementum orci adipiscing. Lobortis
            amet id sollicitudin augue risus non. Eget sit arcu dignissim
            gravida sit faucibus tortor felis. Diam varius viverra nunc amet
            magna tellus sed accumsan convallis. Amet nulla viverra gravida
            dignissim semper massa. Maecenas et orci convallis amet nibh.
            Quisque tortor enim condimentum faucibus gravida. Morbi magna id
            nullam et felis. Lectus fringilla eget vestibulum tellus in ultrices
            condimentum faucibus gravida. Morbi magna id nullam nulla viverra
            gravida. Morbi magna id nullam et felis. Lectus fringilla eget
            vestibulum tellus in ultrices condimentum faucibus gravida. Morbi
            magna id nullam nulla viverra gravida. Morbi magna id nullam et
            felis. Lectus fringilla eget vestibulum tellus in ultrices
            condimentum faucibus gravida. Morbi magna id nullam nulla viverra
          </p>
          <button
            onClick={() => setShow(!show)}
            className="text-[#03a5a5] text-[12px] font-medium"
          >
            {show ? "Закрыть" : "Читать далее "}
          </button>
        </div>
        <button
          onClick={() => setAboutPopUp(true)}
          className="p-[11px_16px] text-[14px] font-medium text-white rounded-[6px] bg-[#03a5a5]"
        >
          Все характеристики
        </button>
      </div>
    </div>
  );
}

export default SingleProductLeft;
