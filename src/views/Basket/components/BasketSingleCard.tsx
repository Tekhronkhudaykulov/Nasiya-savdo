import { useState } from "react";
import { Checkbox } from "antd";
import { ASSETS } from "../../../assets/img/assets";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FiTrash2 } from "react-icons/fi";
function BasketSingleCard({
  isChecked,
  index,
  onCheckChange,
}: {
  setAllChecked: any;
  isChecked: boolean;
  index: number;
  onCheckChange: any;
}) {
  const [currentNumber, setCurrentNumber] = useState(1);

  return (
    <div className="border-t py-[20px] border-line flex items-start justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <Checkbox
            onChange={onCheckChange(index)}
            checked={isChecked}
          ></Checkbox>
          <div className="w-[100px] h-[126px] rounded-[6px] overflow-hidden">
            <img className="h-full object-cover" src={ASSETS.CardImg} alt="" />
          </div>
          <div className="max-w-[360px] flex flex-col">
            <h2 className="text-mainBlack font-[500] text-[16px] text-hidden-2">
              Сковорода антипригарная Elegant, с крышкой, гранитное покрытие,
              24, 26, 28 см
            </h2>
            <div className="flex flex-col gap-2 mt-auto">
              <div className="text-[14px] flex gap-1">
                <span className="text-gray">Продовец:</span>
                <span className="text-mainBlack font-medium">Universe</span>
              </div>
              <div className="text-[14px] flex gap-1">
                <span className="text-gray">Размер:</span>
                <span className="text-mainBlack font-medium">24см</span>
              </div>
              <div className="text-[14px] flex gap-1">
                <span className="text-gray">Цвет:</span>
                <span className="text-mainBlack font-medium">Черный</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[130px]"></div>
          <div className="bg-buttonBg p-[10px_14px] flex gap-5 items-center rounded-[8px]">
            <button
              onClick={() => {
                if (currentNumber !== 1) {
                  setCurrentNumber(currentNumber - 1);
                }
              }}
              className={`${currentNumber === 1 && "text-line"}`}
            >
              <RemoveIcon fontSize="small" />
            </button>
            <span className="text-[16px] text-mainBlack">{currentNumber}</span>
            <button
              onClick={() => {
                setCurrentNumber(currentNumber + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <button className="flex gap-1 text-txtSecondary">
          <FiTrash2 className="text-[18px]" />
          <span>Удалить</span>
        </button>
        <div className="flex flex-col items-end mt-[34px]">
          <p className="bg-pink mb-3 text-textPink text-[14px] font-[500] w-max px-[6px] py-[4px] rounded-[6px]">
            35 000 сум x 12
          </p>
          <p className="text-mainBlack text-[20px] font-[600] mb-[4px]">
            156 000 сум
          </p>
          <p className="text-gray font-[400] text-[14px] line-through">
            260 000 сум
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasketSingleCard;
