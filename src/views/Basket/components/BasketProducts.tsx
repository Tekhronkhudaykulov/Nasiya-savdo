import { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import BasketSingleCard from "./BasketSingleCard";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

function BasketProducts() {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const [allChecked, setAllChecked] = useState(false);

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
    setCheckedItems(checkedItems.map(() => isChecked));
  };

  const onCheckChange =
    (index: number): CheckboxProps["onChange"] =>
    (e) => {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = e.target.checked;
      setCheckedItems(newCheckedItems);
      setAllChecked(newCheckedItems.every((item) => item));
    };
  return (
    <section>
      <div className="flex items-end gap-4 mb-5 mt-[30px]">
        <h2 className="text-[24px] font-semibold text-mainBlack">Корзина</h2>
        <span className="pb-[2px] text-txtSecondary2 text-4">2 товара</span>
      </div>
      <div className="grid lg:grid-cols-[2fr,1fr] gap-5">
        <div className="border border-line rounded-2xl p-[20px]">
          <div className="pb-5">
            <Checkbox
              onChange={onCheckAllChange}
              checked={allChecked}
              className="text-[14px] text-txtSecondary"
            >
              Выбрат все
            </Checkbox>
          </div>
          {checkedItems.map((isChecked, index) => (
            <BasketSingleCard
              key={index}
              onCheckChange={onCheckChange}
              isChecked={isChecked}
              index={index}
              setAllChecked={setAllChecked}
            />
          ))}
        </div>
        <div className="bg-secondary h-max sticky top-[80px] p-5 rounded-2xl">
          <h2 className="text-[20px] font-medium text-mainBlack mb-5">
            Ваша корзина
          </h2>
          <div className="flex flex-col gap-[10px] mt-auto">
            <div className="flex justify-between items-end">
              <span className="text-txtSecondary text-[16px]">Товары: 2</span>
              <span className="text-mainBlack font-semibold text-[20px]">
                788 000 uzs
              </span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-txtSecondary text-[16px]">
                Вы экономите:
              </span>
              <span className="text-mainBlack font-semibold text-[20px]">
                520 000 uzs
              </span>
            </div>
          </div>
          <div className="mt-[120px]">
            <div className="flex justify-between items-end">
              <span className="text-txtSecondary text-[16px]">Итого:</span>
              <span className="text-mainBlack font-semibold text-[20px]">
                368 000 uzs
              </span>
            </div>
            <Link
              className="mt-5 flex justify-center rounded-[8px] text-white bg-[#03a5a5] hover:bg-darkGreen p-[14px_32px]"
              to={`${APP_ROUTES.BASKET_FORM}`}
            >
              Перейти к оформлению
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasketProducts;
