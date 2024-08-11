import React, { useState } from "react";
import { Button, Modal } from "antd";
import { InputMask } from "@react-input/mask";
type SendNumProps = {
  isNumberModalOpen: boolean;
  setIsNumberModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCodeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SendNum: React.FC<SendNumProps> = ({
  isNumberModalOpen,
  setIsNumberModalOpen,
  setIsCodeModalOpen,
}: SendNumProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const handleOk = () => {
    const backendPhoneNumber = phoneNumber.replace(/\D/g, "");
    if (backendPhoneNumber.length === 12) {
      localStorage.setItem("phoneNumber", backendPhoneNumber);
      console.log("Phone Number for Backend:", backendPhoneNumber);
      setIsNumberModalOpen(false);
      setIsCodeModalOpen(true);
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  const handleCancel = () => {
    setIsNumberModalOpen(false);
  };

  return (
    <>
      {/* <Button type="primary" onClick={() => setIsNumberModalOpen(true)}>
        Open Modal
      </Button> */}
      <Modal
        open={isNumberModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={"28%"}
      >
        <div className="pt-[50px]">
          <p className="text-[24px] font-[500] text-center">
            Введите номер телефона
          </p>
          <p className="text-[16px] font-[500] text-txtSecondary2 text-center">
            Отправим смс с кодом подтверждения
          </p>
          <InputMask
            placeholder="+998 __ __  __ __ __  __ __  __ __ "
            mask="+998 (__) ___-__-__"
            replacement={{ _: /\d/ }}
            className="outline-none text-gray mt-[36px] mb-[26px] bg-buttonBg py-[20px] w-full px-[20px] rounded-[8px]"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button
            onClick={handleOk}
            className="!bg-darkGreen  !text-white w-full h-[56px] rounded-[8px] text-[16px] font-[500]"
            type="default"
          >
            Получить код
          </Button>
          <div className="flex justify-center mt-[100px]">
            <p className="font-[500] text-[12px] text-gray w-[265px] text-center">
              Авторизуясь, вы соглашаетесь c политикой обработки персональных
              данных
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SendNum;
