import { ASSETS } from "../../../assets/img/assets";

function ProductInMore() {
  return (
    <div className="flex">
      <img className="mr-[15px]" src={ASSETS.SmallImg} alt="" />
      <div className="mt-[8px]">
        <p className="font-[600] text-[#212121] text-[16px]">
          Apple iPhone 15 Pro Max
        </p>
        <div className="flex gap-x-[12px] mt-[6px]">
          <p className="text-[#80848F] text-[12px]">256 Гб</p>
          <p className="text-[#80848F] text-[12px]">Натуральный титан</p>
        </div>
        <div className="mt-[16px] ">
          <p className="font-[600] text-[#212121] text-[16px]">
            17 568 000 uzs
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInMore;
