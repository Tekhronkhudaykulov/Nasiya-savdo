import { FaAngleRight } from "react-icons/fa";

function SubCateg({
  subCateg,
  active,
  activeArrow,
}: {
  subCateg: { name: string };
  active: any;
  activeArrow: any;
}) {
  return (
    <div
      className={`${
        active ? "bg-buttonBg text-mainBlack" : "text-txtSecondary2"
      } flex justify-between items-center py-[7.5px] text-[14px] px-[10px] rounded-[6px] gap-3 cursor-pointer`}
    >
      <span>{subCateg.name}</span>
      {activeArrow && (
        <span>
          <FaAngleRight />
        </span>
      )}
    </div>
  );
}

export default SubCateg;
