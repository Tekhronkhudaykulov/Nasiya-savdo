import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import VerificationInput from "react-verification-input";
import "./style.scss";

type SendNumProps = {
  isCodeModalOpen: boolean;
  setIsCodeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function maskPhoneNumber(phoneNumber: string): string {
  const countryCode = phoneNumber.slice(0, 3); // 998
  const firstPart = phoneNumber.slice(3, 5); // 90
  const lastPart = phoneNumber.slice(10, 12); // 06

  return `${countryCode} ${firstPart}*****${lastPart}`;
}

const SendCode: React.FC<SendNumProps> = ({
  isCodeModalOpen,
  setIsCodeModalOpen,
}) => {
  const [timer, setTimer] = useState<number>(59);
  const [code, setCode] = useState<string>("");
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

  const handleLogin = () => {
    if (code.length === 5) {
      localStorage.setItem("authorised", "true");
      setIsCodeModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsCodeModalOpen(false);
  };
  const handleResendCode = () => {
    setTimer(59);
    setIsResendEnabled(false);
  };
  return (
    <Modal
      open={isCodeModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={"28%"}
    >
      <div className="pt-[50px]">
        <p className="text-[24px] font-[500] text-center">
          Подтверждение SMS кода
        </p>
        <p className="text-[16px] leading-[19px] line-clamp-2 font-[500] mt-[6px] mb-[38px] text-txtSecondary2 text-center">
          SMS с кодом отправлено на <br /> номер +{maskPhoneNumber(phoneNumber)}
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
          onClick={handleLogin}
          disabled={code.length < 5}
        >
          Войти
        </Button>
      </div>
    </Modal>
  );
};

export default SendCode;
