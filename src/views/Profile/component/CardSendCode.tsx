import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import VerificationInput from "react-verification-input";
import { ASSETS } from "../../../assets/img/assets";
import { Link } from "react-router-dom";

type SendNumProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function maskPhoneNumber(phoneNumber: string): string {
  const countryCode = phoneNumber.slice(0, 3); // 998
  const firstPart = phoneNumber.slice(3, 5); // 90
  const lastPart = phoneNumber.slice(10, 12); // 06

  return `${countryCode} ${firstPart}*****${lastPart}`;
}

const CardSendCode: React.FC<SendNumProps> = ({ open, setOpen }) => {
  const [timer, setTimer] = useState<number>(59);
  const [code, setCode] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResendEnabled, setIsResendEnabled] = useState<boolean>(false);
  const phoneNumber = localStorage.getItem("phoneNumber") || "";
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setIsResendEnabled(true);
        }
        return prevTimer > 0 ? prevTimer - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleSubmit = () => {
    if (code.length === 5) {
      setOpen(false);
      setIsSuccess(true);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancel2 = () => {
    setIsSuccess(false);
  };
  const handleResendCode = () => {
    setTimer(59);
    setIsResendEnabled(false);
  };
  return (
    <>
      <Modal open={open} onCancel={handleCancel} footer={null} width={"28%"}>
        <div className="pt-[50px]">
          <p className="text-[24px] font-[500] text-center">
            Подтверждение SMS кода
          </p>
          <p className="text-[16px] leading-[19px] line-clamp-2 font-[500] mt-[6px] mb-[38px] text-txtSecondary2 text-center">
            SMS с кодом отправлено на <br /> номер +
            {maskPhoneNumber(phoneNumber)}
          </p>
          <p className="text-[14px] font-[400] mb-[14px] text-txtSecondary2 text-center">
            Введите код из смс
          </p>
          <VerificationInput
            length={5}
            value={code}
            onChange={setCode}
            classNames={{
              character: "outline-none bg-buttonBg border-none",
              characterFilled: "text-gray",
              container: "flex justify-between w-full mb-[39px]",
            }}
          />

          {isResendEnabled ? (
            <p
              onClick={handleResendCode}
              className="text-center cursor-pointer text-[#03A5A5] text-[14px] font-[400] mb-[50px]"
            >
              Отправить код повторно
            </p>
          ) : (
            <p className="text-center text-mainBlack text-[14px] font-[400] mb-[50px]">
              {`00:${timer.toString().padStart(2, "0")}`}
            </p>
          )}
          <Button
            className="!bg-darkGreen !text-white w-full h-[56px] rounded-[8px] text-[16px] font-[500]"
            type="default"
            onClick={handleSubmit}
            disabled={code.length < 5}
          >
            Подтвердить
          </Button>
        </div>
      </Modal>
      <Modal
        open={isSuccess}
        onCancel={handleCancel2}
        footer={null}
        width={"400px"}
      >
        <div className="flex justify-center relative">
          <div>
            <img src={ASSETS.CardSuccess} />
          </div>
        </div>
        <div className="my-[36px] text-center">
          <h4 className="text-[24px] text-[#000] font-medium">
            Вы успешно <br /> добавили карту
          </h4>
        </div>
        <div className="flex gap-4 text-center">
          <Link
            className="py-[14px] max-w-[100%] w-full hover:text-white rounded-[8px] bg-darkGreen text-white"
            to={`/`}
          >
            Перейти в каталог
          </Link>
          <Link
            className="py-[14px] max-w-[100%] w-full hover:text-darkGreen rounded-[8px] bg-[rgb(2,115,115,.15)] text-darkGreen font-medium"
            to={`/`}
          >
            На главную
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default CardSendCode;
