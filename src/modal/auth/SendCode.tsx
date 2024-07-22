import { Button, Modal } from "antd";
import { useState } from "react";
import VerificationInput from "react-verification-input";
import "./style.scss";

const SendCode = () => {
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
            Подтверждение SMS кода
          </p>
          <p className="text-[16px] leading-[19px] line-clamp-2 font-[500] mt-[6px] mb-[38px] text-txtSecondary2 text-center">
            SMS с кодом отправлено на <br /> номер +998 90*****06
          </p>
          <p className="text-[14px] font-[400] mb-[14px] text-txtSecondary2 text-center">
            Введите код из смс
          </p>
          <VerificationInput
            length={5}
            classNames={{
              character: "outline-none bg-buttonBg border-none",
              characterFilled: "text-gray",
              container: "flex  justify-between w-full mb-[39px]",
            }}
          />
          <p className="text-center text-mainBlack text-[14px] font-[400] mb-[50px]">
            00:59
          </p>
          <Button
            className="!bg-darkGreen   !text-white w-full h-[56px] rounded-[8px] text-[16px] font-[500]"
            type="default"
          >
            Войти
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SendCode;
