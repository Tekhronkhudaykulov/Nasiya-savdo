import { Link } from "react-router-dom";
import { EmptyOrder } from "../assets/icon";

const OrderEmpty = () => {
  return (
    <div className="flex items-center mt-[20px]  justify-center flex-col bg-[#FFFFFF] py-[40px] rounded-[18px] border border-line">
      <div className="mb-[5rem] grid place-content-center">
        <div className="text-center max-w-[401px] flex flex-col gap-[40px]">
          <img className="mx-auto" src={EmptyOrder} />
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-[20px] font-medium text-mainBlack">
              Ваши заказы будут отображаться здесь
            </h3>
            <p className="text-txtSecondary">
              Чтобы отслеживать статус заказа, нужно его оформить
            </p>
          </div>
          <div className="flex gap-4">
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
    </div>
  );
};

export default OrderEmpty;
