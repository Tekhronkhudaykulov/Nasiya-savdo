import { useNavigate } from "react-router-dom";
import { Basket, Favourite, Scale, Star } from "../../assets/icon";
import { ASSETS } from "../../assets/img/assets";
import { APP_ROUTES } from "../../router";

interface CardType {
  title: string;
  saleIsHas: boolean;
  img: string;
  reyting: number | string;
  price: number | string;
  oldPrice: number | string;
  priceMonth: string;
}

const Card = () => {
  const navigate = useNavigate();
  return (
    // <div>
    //   <img className="relative" src={ASSETS.CardImg} alt="" />
    //   <div className="flex justify-between">
    //     <div className=" bg-gradient-sale max-w text-[25px]">sale</div>
    //     <div className="absolute">
    //       <Favourite />
    //       <Scale />
    //     </div>
    //   </div>
    // </div>

    <div
      className="max-w-sm mx-auto p-4"
      onClick={() =>
        navigate(`${APP_ROUTES.PROFILE}/${APP_ROUTES.PROFILE_ACCOUNT}`)
      }
    >
      <div className="relative  border-gray-200 rounded-lg overflow-hidden shadow-lg">
        {/* Sale Badge */}
        <div className="absolute top-2 left-2 bg-gradient-sale text-[12px] font-[400] text-white px-2 py-1 text-sm rounded-md">
          Sale
        </div>
        {/* Heart Icon */}
        <div className="absolute top-2 right-2">
          <Favourite />
        </div>
        {/*  Balance Icon */}
        <div className="absolute top-10 right-2">
          <Scale />
        </div>
        {/* Product Image */}
        <img className="w-full" src={ASSETS.CardImg} alt="Product Image" />
        {/* Product Name */}
        <div className="p-4">
          <div className="flex items-center gap-x-[4px]">
            <Star />
            <p className="text-gray text-[12px] font-[500]">4.9 (115 оценок)</p>
          </div>
          <p className="text-mainBlack font-[400] text-[16px] mt-[6px]">
            Сковорода Kukmara с антипригарным покрыти...
          </p>
          <div>
            <p className="text-gray font-[400] text-[10px] line-through mt-[6px]">
              260 000 сум
            </p>
            <p className="text-mainBlack text-[16px] font-[600] my-[4px]">
              156 000 сум
            </p>
            <p className="bg-pink text-textPink text-[12px] font-[500] w-max px-[6px] py-[3px] rounded-[6px]">
              35 000 сум x 12 месяц
            </p>
          </div>
          <div className="flex items-center  mt-[12px] gap-x-[6px]">
            <button className="text-gray w-full text-[14px] font-[500] bg-buttonBg py-[14px] px-[30px] rounded-[100px]">
              Купить в один клик
            </button>
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-green rounded-[100px]">
              <Basket />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
