import React, { useState } from "react";
import { Button, Modal } from "antd";
import { InputMask } from "@react-input/mask";

const SendNum: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
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
          />
          <Button
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
