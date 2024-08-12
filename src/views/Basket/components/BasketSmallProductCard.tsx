import { ASSETS } from "../../../assets/img/assets";

function BasketSmallProductCard() {
  return (
    <div className="flex gap-[12px]">
      <div className="w-[60px] flex-shrink-0 h-[76px] bg-[#efefef]">
        <img
          className="h-full object-contain rounded-[6px]"
          src={ASSETS.CardImg}
          alt=""
        />
      </div>
      <div className="max-w-[330px] flex flex-col">
        <h2 className="text-mainBlack font-[400] text-[14px] mb-1 text-hidden-2">
          Сковорода антипригарная Elegant, с крышкой, гранитное покрытие, 24,
          26, 28 см
        </h2>
        <div className="flex flex-col gap-1 mt-auto">
          <div className="text-[14px] flex gap-1">
            <span className="text-gray">Размер:</span>
            <span className="text-mainBlack font-medium">36см</span>
          </div>
          <div className="text-[14px] flex gap-1">
            <span className="text-gray">Цвет:</span>
            <span className="text-mainBlack font-medium">Черный</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketSmallProductCard;
