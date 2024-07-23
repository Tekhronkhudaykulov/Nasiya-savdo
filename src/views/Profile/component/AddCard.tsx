import { Modal } from "antd";
import { modalsStore } from "../../../store";

const AddCard = () => {
  const { modals, closeModal } = modalsStore();
  return (
    <Modal
      footer={null}
      open={modals?.card_payment}
      onCancel={() => closeModal("card_payment")}
    >
      <p>Добавление карты</p>
      <p>Номер вашей карты и срок ее действия</p>
      <div></div>
    </Modal>
  );
};

export default AddCard;
