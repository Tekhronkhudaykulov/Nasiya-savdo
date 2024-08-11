import { useState } from "react";
import { CategoryIcon, CategoryOpen } from "../../../assets/icon";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-[12px_16px] flex items-center gap-[6px] transition duration-200 rounded-[100px] ${
          isOpen
            ? "bg-green text-darkGreen"
            : "bg-darkGreen text-white hover:bg-[#129b9b]"
        }`}
      >
        <span>
          {isOpen ? (
            <div className="w-[24px] h-[24px]">
              <img src={`${CategoryOpen}`} alt="" />
            </div>
          ) : (
            <CategoryIcon />
          )}
        </span>
        <span>Категории</span>
      </button>
    </>
  );
};

export default Category;
