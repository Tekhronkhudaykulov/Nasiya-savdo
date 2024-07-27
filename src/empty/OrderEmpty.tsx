import { Button } from "antd";

const OrderEmpty = ({ img, title, desc }: any) => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <img src={img} alt="" />
      <p className=" text-center leading-[28px] text-[#212121] font-[500] md:text-[20px] mt-[20px]">
        {title}
      </p>
      <p className="max-w-[300px] text-[#6E6E73] font-[400] text-center mt-[15px] max-md:text-[14px] leading-[19px]">
        {desc}
      </p>
      <div className="flex mt-[30px]  gap-[10px]">
        <div className="w-[200px]">
          <Button
            className="!bg-darkGreen    !text-white w-full h-[56px] rounded-[8px] text-[16px] font-[500]"
            type="default"
          >
            Перейти в каталог
          </Button>
        </div>
        <div className="w-[200px]">
          <Button
            className="!bg-darkGreen   text-white w-full h-[56px] rounded-[8px] text-[16px] font-[500]"
            type="default"
          >
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderEmpty;
