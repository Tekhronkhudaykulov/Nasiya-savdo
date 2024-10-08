import React from "react";
import { Link } from "react-router-dom";
import BasketSmallProductCard from "../components/BasketSmallProductCard";
import InputBasketForm from "../../../components/InputBasketForm/InputBasketForm";
import { APP_ROUTES } from "../../../router";

const BasketOrderSummary: React.FC = () => {
  return (
    <div className="border border-line h-max sticky top-[80px] p-5 flex flex-col gap-[36px] rounded-2xl">
      {/*  */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[20px] font-medium text-mainBlack">Ваш заказ</h2>
        <div className="flex justify-between items-center">
          <span className="text-txtSecondary text-[16px]">Товары: 2</span>
          <Link className="text-[#03A5A5] font-medium" to={APP_ROUTES.BASKET}>
            Изменить
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-[10px] mt-auto">
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            {index !== 0 && <hr className="text-line my-4" />}
            <BasketSmallProductCard />
          </div>
        ))}
      </div>
      {/*  */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-txtSecondary">Товары:</span>
          <span className="text-mainBlack font-semibold text-[16px]">
            368 000 uzs
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-txtSecondary">
            Доставка курьером:
          </span>
          <span className="text-mainBlack font-semibold text-[16px]">
            30 000 uzs
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-txtSecondary">
            Скидка по промокоду:
          </span>
          <span className="text-mainBlack font-semibold text-[16px]">
            40 000 uzs
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-txtSecondary">Итого:</span>
          <span className="text-mainBlack font-semibold text-[16px]">
            358 000 uzs
          </span>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-3">
        <label className="text-[14px] text-txtSecondary font-medium">
          Есть промокод?
        </label>
        <InputBasketForm
          className="text-txtSecondary2 border-none bg-secondary text-[14px] font-medium"
          placeHolder="Введите промокод"
          value="SHAMSPROMO"
        />
      </div>
      {/*  */}
      <button className="flex justify-center rounded-[8px] text-white bg-[#03a5a5] hover:bg-darkGreen p-[14px_32px]">
        Оформить
      </button>
    </div>
  );
};

export default BasketOrderSummary;
