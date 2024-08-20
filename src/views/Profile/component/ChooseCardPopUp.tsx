import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CloseCircle, TrashCan } from "../../../assets/icon";
import { ASSETS } from "../../../assets/img/assets";
import { useState } from "react";

const PlastikCard = ({
  selectedCard,
  setSelectedCard,
  activeIndex,
}: {
  selectedCard: any;
  setSelectedCard: any;
  activeIndex: number;
}) => {
  return (
    <div
      onClick={() => {
        setSelectedCard(activeIndex);
      }}
      className={`p-[20px] rounded-[12px] select-none border bg-buttonBg flex flex-col gap-[17px] cursor-pointer ${
        selectedCard ? "border-darkGreen" : "border-transparent"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-[7px]">
          <h3 className="text-[16px] font-medium text-mainBlack">
            Номер карты
          </h3>
          <p className="text-[14px] text-txtSecondary2 font-medium">
            9860**** **** 1234
          </p>
        </div>
        <button>
          <TrashCan />
        </button>
      </div>
      <div className="flex justify-between">
        <p className="text-[14px] text-txtSecondary2 font-medium">SQB</p>
        <div className="w-[42px] h-[25px]">
          <img className="w-ful h-full object-contain" src={ASSETS.Humo} />
        </div>
      </div>
    </div>
  );
};

function ChooseCardPopUp({ setShow }: { setShow: any }) {
  const [selectedCard, setSelectedCard] = useState(0);
  const [success, setSuccess] = useState(false);
  return (
    <>
      <div className="fixed inset-0 bg-white z-[1] flex items-center justify-center">
        <div
          onClick={() => setShow(false)}
          className="absolute inset-0 z-[-1]"
        ></div>
        <div className="max-w-[750px] w-full p-[20px_26px] flex flex-col gap-[60px] border border-line rounded-[16px]">
          <div className="flex flex-col items-center mx-auto">
            <h2 className="text-[24px] font-medium text-black mb-[5px]">
              Оплата
            </h2>
            <span className="text-[16px] text-txtSecondary2 font-medium">
              Договор #I2888968
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-[16px] font-medium text-mainBlack">
                Выберите карту
              </h3>
              <Link
                to={`/profile/profile_card`}
                className="flex items-center gap-[6px] text-[16px] text-darkGreen font-medium"
              >
                Добавить карту <FaPlus />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-[8px]">
              <PlastikCard
                selectedCard={selectedCard == 1}
                setSelectedCard={setSelectedCard}
                activeIndex={1}
              />
              <PlastikCard
                selectedCard={selectedCard == 2}
                setSelectedCard={setSelectedCard}
                activeIndex={2}
              />
            </div>
          </div>
          <div className="h-[149px] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Введите сумму к оплате"
                className="p-[15px_20px] text-txtSecondary2 outline-none w-full text-[16px] font-normal border border-line rounded-[8px]"
              />
              <button
                onClick={() => setSuccess(true)}
                className="text-[16px] ml-auto max-w-[180px] w-full font-medium p-[14px] bg-darkGreen rounded-[8px] text-white"
              >
                Оплатить
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-[16px] text-txtSecondary2">
                  Рекомендованная сумма
                </span>
                <span className="text-[16px] font-semibold text-mainBlack">
                  568 000 сум
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[16px] text-txtSecondary2">
                  Полное погашение
                </span>
                <span className="text-[16px] font-semibold text-mainBlack">
                  1 568 000 сум
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success && (
        <div className="fixed z-[100] inset-0 flex items-center justify-center">
          <div
            onClick={() => {
              setShow(false);
            }}
            className="bg-[#212121] opacity-[25%] absolute inset-0"
          ></div>
          <div className="bg-[#fff] z-[1] p-[26px] max-w-[466px] w-full rounded-[16px]">
            <div className="flex justify-center relative">
              <div>
                <img src={ASSETS.CardSuccess} />
              </div>
              <button
                className="absolute right-[0] top-[0]"
                onClick={() => {
                  setShow(false);
                }}
              >
                <CloseCircle />
              </button>
            </div>
            <div className="my-[36px] text-center">
              <span className="text-[16px] font-medium text-txtSecondary2">
                Договор #I2888968
              </span>
              <h4 className="text-[24px] font-medium mt-[11px]">
                Оплата прошла успешно
              </h4>
            </div>
            <div className="flex gap-4 text-center">
              <Link
                className="py-[14px] max-w-[200px] w-full rounded-[8px] bg-darkGreen text-white"
                to={``}
              >
                Перейти в каталог
              </Link>
              <Link
                className="py-[14px] max-w-[200px] w-full rounded-[8px] bg-[rgb(2,115,115,.15)] text-darkGreen font-medium"
                to={`/`}
              >
                На главную
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChooseCardPopUp;
