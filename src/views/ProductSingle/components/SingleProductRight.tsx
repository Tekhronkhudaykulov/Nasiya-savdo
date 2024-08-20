import { useState } from "react";
import { Favourite, Favourited, Scale, Share, Star } from "../../../assets/icon";
import AnorCard from "./AnorCard";
import UzumCard from "./UzumCard";

function SingleProductRight() {
  const [activeCard, setActiveCart] = useState(0);
  const [selected, setSelected] = useState<string>("6 мес");
  const durations = ["3 мес", "6 мес", "12 мес", "24 мес"];
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-[30px]">
        <button className="text-mainBlack flex gap-[12px] items-center">
          <Scale />
          <span className="text-[14px]">Сравнить</span>
        </button>
        <button className="text-mainBlack flex gap-[12px] items-center">
          <Share />
          <span className="text-[14px]">Поделиться</span>
        </button>
        <button
          className="text-mainBlack flex gap-[12px] items-center"
          onClick={() => {
            setIsFavourite(!isFavourite);
          }}
        >
          {isFavourite ? <Favourited /> : <Favourite />}
          <button className="absolute top-[11px] right-[11px]"></button>
          <span className="text-[14px]">В избранное</span>
        </button>
      </div>
      <div className="bg-buttonBg rounded-[16px] p-[20px_16px] flex flex-col gap-5">
        <h2 className="text-mainBlack text-[24px] font-semibold">
          156 000 сум
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <span className="text-[12px] text-txtSecondary2 font-medium">
              Продавец:
            </span>
            <div className="flex items-center gap-[2px]">
              <span className="text-black text-[12px] font-medium">
                Universe
              </span>
              <div className="flex items-center gap-x-[2px]">
                <Star />
                <p className="text-gray text-[12px] font-[500]">4.0</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-[12px] text-txtSecondary2 font-medium">
              Доставка:
            </span>
            <span className="text-black text-[12px] font-medium">
              По BTC почте
            </span>
          </div>
        </div>
        <div className="flex gap-[8px]">
          <button className="text-[16px] max-w-[201px] w-full font-medium py-[14px] bg-darkGreen text-white rounded-[8px]">
            Купить сейчас
          </button>
          <button className="text-[16px] max-w-[201px] w-full font-medium py-[14px] text-darkGreen bg-[rgb(2,115,115,.15)] rounded-[8px]">
            В корзину
          </button>
        </div>
      </div>
      <div className="border border-line rounded-2xl flex flex-col gap-5 p-[20px_16px]">
        <h2 className="text-[20px] font-semibold">Рассрочка платежа:</h2>
        <div className="flex flex-col gap-4 rounded-[10px]">
          <div className="flex gap-2 items-center">
            {durations.map((duration) => (
              <button
                key={duration}
                className={`border-[1.5px] rounded-[8px] text-[12px] font-medium p-[9px_12px] ${
                  selected === duration
                    ? "bg-[rgb(2,115,115,.15)] text-darkGreen border-line"
                    : "text-txtSecondary2 border-line"
                }`}
                onClick={() => setSelected(duration)}
              >
                {duration}
              </button>
            ))}
          </div>
          <AnorCard setActiveCart={setActiveCart} active={activeCard == 1} />
          <UzumCard setActiveCart={setActiveCart} active={activeCard == 2} />
        </div>
      </div>
    </div>
  );
}

export default SingleProductRight;
