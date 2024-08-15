import { SingleCategoryIcon } from "../../../assets/icon";
import { FaAngleRight } from "react-icons/fa";

function MainCateg({
  categ,
  active,
  activeArrow,
}: {
  categ: { name: string };
  active: any;
  activeArrow: any;
}) {
  return (
    <div
      className={`${
        active ? "bg-buttonBg text-mainBlack" : "text-txtSecondary2"
      } flex items-center py-[5px] pr-[10px] pl-1 rounded-[10px] gap-3 cursor-pointer`}
    >
      <SingleCategoryIcon />
      <div className="flex justify-between w-full items-center text-[14px]">
        <span className={`${active ? "font-medium" : "font-normal"}`}>
          {categ.name}
        </span>
        {activeArrow && (
          <span>
            <FaAngleRight />
          </span>
        )}
      </div>
    </div>
  );
}

export default MainCateg;
