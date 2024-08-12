import { useState } from "react";
import { ASSETS } from "../../../assets/img/assets";

function BasketPayForm() {
  const [isRadio, setIsRadio] = useState(0);
  const [selected, setSelected] = useState<string>("6 мес");
  const durations = ["3 мес", "6 мес", "12 мес", "24 мес"];
  return (
    <div className="border border-line rounded-2xl p-[20px]">
      <h2 className="text-[20px] mb-[24px] font-semibold">Способ оплаты:</h2>
      <div className="flex flex-col gap-2 max-w-[420px]">
        <button
          onClick={() => setIsRadio(1)}
          className="select-none cursor-pointer p-[16px_18px] rounded-[10px] flex flex-col gap-[11px] bg-secondary"
        >
          <div className="flex gap-4 items-center">
            <div className="rounded-full flex items-center justify-center border-[2px] border-darkGreen w-[24px] h-[24px]">
              <div
                className={`w-[14px] h-[14px] rounded-full ${
                  isRadio == 1 ? "bg-darkGreen" : ""
                }`}
              ></div>
            </div>
            <span className="text-[14px] font-medium text-mainBlack">
              При получении
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-[24px]"></div>
            <h4 className="text-txtSecondary2 text-[14px] font-medium">
              Наличными или картой
            </h4>
          </div>
        </button>
        <button
          onClick={() => setIsRadio(2)}
          className="select-none cursor-pointer p-[16px_18px] rounded-[10px] flex flex-col gap-[11px] bg-secondary"
        >
          <div className="flex gap-4 items-center">
            <div className="rounded-full flex items-center justify-center border-[2px] border-darkGreen w-[24px] h-[24px]">
              <div
                className={`w-[14px] h-[14px] rounded-full ${
                  isRadio == 2 ? "bg-darkGreen" : ""
                }`}
              ></div>
            </div>
            <span className="text-[14px] font-medium text-mainBlack">
              Картой оналйн
            </span>
          </div>
        </button>
        <button
          onClick={() => setIsRadio(3)}
          className="select-none cursor-pointer p-[16px_18px] rounded-[10px] flex flex-col gap-[11px] bg-secondary"
        >
          <div className="flex gap-4 items-center">
            <div className="rounded-full flex items-center justify-center border-[2px] border-darkGreen w-[24px] h-[24px]">
              <div
                className={`w-[14px] h-[14px] rounded-full ${
                  isRadio == 3 ? "bg-darkGreen" : ""
                }`}
              ></div>
            </div>
            <span className="text-[14px] font-medium text-mainBlack">
              При получении
            </span>
          </div>
        </button>
        <div className="p-4 flex flex-col gap-4 border border-line rounded-[10px]">
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
          <div className="border-[1.5px] p-4 rounded-[10px] flex flex-col gap-4 cursor-pointer border-darkGreen">
            <div className="flex flex-col gap-3">
              <span className="text-[12px] text-txtSecondary2 font-medium">
                Рассрочка от партнера Anorbank
              </span>
              <div className="flex justify-between items-center">
                <img
                  className="h-[18px] w-auto"
                  src={ASSETS.AnorBank}
                  alt="anor bank"
                />
                <span className="text-mainBlack font-semibold text-[14px]">
                  35 000 сум/мес
                </span>
              </div>
            </div>
            <button className="flex justify-center rounded-[8px] text-white bg-[#03a5a5] hover:bg-darkGreen p-[14px_32px]">
              Оформить
            </button>
          </div>
          <div className="border-[1.5px] p-4 rounded-[10px] flex flex-col gap-4 cursor-pointer border-line">
            <div className="flex flex-col gap-3">
              <span className="text-[12px] text-txtSecondary2 font-medium">
                Рассрочка от партнера UzumBank
              </span>
              <div className="flex justify-between items-center">
                <img
                  className="h-[18px] w-auto"
                  src={ASSETS.UzumBank}
                  alt="anor bank"
                />
                <span className="text-mainBlack font-semibold text-[14px]">
                  38 000 сум/мес
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-medium text-txtSecondary">
                Оплата в месяц:
              </span>
              <span className="text-mainBlack font-semibold text-[16px]">
                35 000 сум/мес
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-medium text-txtSecondary">
                Цена товара:
              </span>
              <span className="text-mainBlack font-semibold text-[16px]">
                368 000 сум/мес
              </span>
            </div>
            <hr className="text-line my-[10px]" />
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-medium text-txtSecondary">
                Итоговая цена:
              </span>
              <span className="text-mainBlack font-semibold text-[16px]">
                398 000 сум/мес
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketPayForm;
