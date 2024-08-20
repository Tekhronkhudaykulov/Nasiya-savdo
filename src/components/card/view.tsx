import { Link } from "react-router-dom";
import {
  Basket,
  BasketBought,
  Favourite,
  Favourited,
  Scale,
  Star,
} from "../../assets/icon";
import { ASSETS } from "../../assets/img/assets";
import { useState } from "react";

// interface CardType {
//   title: string;
//   saleIsHas: boolean;
//   img: string;
//   reyting: number | string;
//   price: number | string;
//   oldPrice: number | string;
//   priceMonth: string;
// }

interface CardProps {
  discount?: boolean;
  setIsNumberModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({ discount, setIsNumberModalOpen }: CardProps) => {
  const [isBought, setIsBought] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const authed = localStorage.getItem("authorised") === "true";
  return (
    <>
      <div className="relative flex flex-col h-full rounded-lg">
        {/* Sale Badge */}
        <div className="absolute z-10 top-2 left-2 bg-gradient-sale text-[12px] font-[400] text-white px-2 py-1 text-sm rounded-md">
          Sale
        </div>
        {/* Heart Icon */}
        <button
          onClick={() => {
            setIsFavourite(!isFavourite);
          }}
          className="absolute top-[11px] right-[11px]"
        >
          {isFavourite ? <Favourited /> : <Favourite />}
        </button>
        {/*  Balance Icon */}
        <div className="cursor-pointer absolute top-10 right-[9px]">
          <Scale />
        </div>
        {/* Product Image */}
        <Link to={`/productSingle`}>
          <img
            className="w-full rounded-[10px]"
            src={ASSETS.CardImg}
            alt="Product Image"
          />
        </Link>
        {/* Product Name */}
        <div className="p-[8px] h-full flex flex-col">
          <div className="flex items-center gap-x-[4px]">
            <Star />
            <p className="text-gray text-[12px] font-[500]">4.9 (115 оценок)</p>
          </div>
          <Link
            to={`/productSingle`}
            className="text-mainBlack font-[400] text-[16px] mt-[6px] text-hidden-2"
          >
            Сковорода Kukmara с антипригарным покрыти...
          </Link>
          <div className="flex justify-between items-end mt-1">
            <div>
              <p className="text-gray min-h-[14px] font-[400] text-[10px] line-through mt-[6px]">
                {discount ? " 260 000 сум" : ""}
              </p>
              <p className="text-mainBlack mt-auto text-[16px] font-[600] my-[4px]">
                156 000 сум
              </p>
              <p className="bg-pink text-textPink text-[12px] font-[500] w-max px-[6px] py-[3px] rounded-[6px]">
                35 000 сум x 12 месяц
              </p>
            </div>
            {authed && (
              <button
                onClick={() => setIsBought(!isBought)}
                className={`w-[42px] cursor-pointer h-[42px] flex-shrink-0 flex items-center justify-center ${
                  isBought ? "bg-green" : "bg-secondary"
                } rounded-[100px]`}
              >
                {isBought ? <Basket /> : <BasketBought />}
              </button>
            )}
          </div>
          {!authed && (
            <div
              onClick={() => {
                setIsNumberModalOpen(true);
              }}
              className="flex items-center mt-[12px] gap-x-[11px]"
            >
              <button className="text-gray w-full text-[14px] font-[500] bg-buttonBg py-[14px] px-[20px] rounded-[100px]">
                Купить в один клик
              </button>
              <div
                className={`w-[42px] cursor-pointer h-[42px] flex-shrink-0 flex items-center justify-center ${
                  isBought ? "bg-green" : "bg-secondary"
                } rounded-[100px]`}
              >
                {isBought ? <Basket /> : <BasketBought />}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
