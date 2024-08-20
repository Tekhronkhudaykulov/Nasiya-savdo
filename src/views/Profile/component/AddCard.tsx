import { Modal } from "antd";
import { modalsStore } from "../../../store";
import InputMask from "react-input-mask";
import { useState } from "react";
import { ASSETS } from "../../../assets/img/assets";
import CardSendCode from "./CardSendCode";
const AddCard = () => {
  const { modals, closeModal } = modalsStore();
  const [open, setOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardDate, setCardDate] = useState<string>("");
  const handleOk = () => {
    closeModal("card_payment");
    setOpen(true);
  };

  return (
    <>
      <Modal
        footer={null}
        open={modals?.card_payment}
        onCancel={() => closeModal("card_payment")}
      >
        <div className="bg-[#fff] z-[1] p-[26px] max-w-[466px] w-full rounded-[16px]">
          <h1 className="text-[24px] font-semibold text-mainBlack">
            Добавление карты
          </h1>
          <p className="text-[17px] text-mainBlack opacity-[.7] mt-[50px]">
            Номер вашей карты и срок ее действия
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-[16px] mt-[30px]">
              <div className="flex flex-col gap-3">
                <label
                  className="text-[14px] font-semibold text-mainBlack"
                  htmlFor="numberCard"
                >
                  Номер карты
                </label>
                <InputMask
                  placeholder="____ ____ ____ ____"
                  mask="9999 9999 9999 9999"
                  className="border border-line text-[17px] opacity-[70%] rounded-[6px] p-[16px] outline-none font-medium"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                ></InputMask>
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="text-[14px] font-semibold text-mainBlack"
                  htmlFor="numberCard"
                >
                  Срок действия
                </label>
                <InputMask
                  placeholder="__/__"
                  mask="99/99"
                  className="border border-line w-full font-medium text-[17px] opacity-[70%] rounded-[6px] p-[16px] outline-none"
                  value={cardDate}
                  onChange={(e) => setCardDate(e.target.value)}
                ></InputMask>
              </div>
            </div>
            <button
              onClick={() => handleOk()}
              className="py-[18px] text-center text-[17px] hover:text-white w-full rounded-[6px] bg-darkGreen text-white"
            >
              Продолжить
            </button>
          </div>
          <div className="flex gap-3 mt-[52px]">
            <div className="h-[32px] w-auto">
              <img
                className="w-full h-full object-contain"
                src={ASSETS.uzcard}
                alt=""
              />
            </div>
            <div className="h-[32px] w-auto">
              <img
                className="w-full h-full object-contain"
                src={ASSETS.Humo}
                alt=""
              />
            </div>
          </div>
        </div>
      </Modal>
      {open && <CardSendCode setOpen={setOpen} open={open} />}
    </>
  );
};

export default AddCard;
