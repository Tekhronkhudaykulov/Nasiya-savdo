import { Button } from "antd";

const OrderEmpty = ({ img, title, desc }: any) => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <img src={img} alt="" />
      <p className="max-w-[320px] text-center leading-[28px] text-[#212121] font-[600] md:text-[20px] mt-[20px]">
        {title}
      </p>
      <p className="max-w-[300px] text-center mt-[15px] max-md:text-[14px] leading-[19px]">
        {desc}
      </p>
      <div className="flex mt-[30px]  gap-[10px]">
        <Button
          className="!bg-darkGreen    !text-white w-full h-[56px] rounded-[8px] text-[16px] font-[500]"
          type="default"
        >
          Перейти в каталог
        </Button>
        <Button
          className="!bg-darkGreen   text-white w-full h-[56px] rounded-[8px] text-[16px] font-[500]"
          type="default"
        >
          На главную
        </Button>
      </div>
    </div>
  );
};

export default OrderEmpty;
