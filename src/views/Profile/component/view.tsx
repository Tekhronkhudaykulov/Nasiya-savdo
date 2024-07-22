interface ProfileItemType {
  img: any;
  title: string;
  desc: string;
}

interface ButtonStatus {
  bg: string;
  textColor: string;
  title: string;
}

interface StatusCard {
  deliveryDate: string | number;
  addres: string;
  price: string | number;
  deliveryOrder: string | number;
}
const ProfileItem = ({ img, title, desc }: ProfileItemType) => {
  return (
    <div className="flex items-center justify-center flex-col">
      {img}
      <p className="max-w-[320px] text-center leading-[28px] text-[#212121] font-[600] md:text-[20px] mt-[20px]">
        {title}
      </p>
      <p className="max-w-[300px] text-center mt-[15px] max-md:text-[14px] leading-[19px]">
        {desc}
      </p>
    </div>
  );
};

const StatusButton = ({ bg, textColor, title }: ButtonStatus) => {
  return (
    <div
      style={{ background: bg }}
      className="h-[24px]  rounded-[4px] flex items-center justify-center w-[30%]"
    >
      <p className={`text-[${textColor}]`}>{title}</p>
    </div>
  );
};

const StatusCard = ({
  deliveryDate,
  addres,
  price,
  deliveryOrder,
}: StatusCard) => {
  return (
    <>
      <div className="flex gap-x-[35px] mt-[16px]">
        <div className="order-text grid gap-y-[20px]">
          <div className="h-[24px] flex items-center start">
            <p>Статус</p>
          </div>
          <p>Дата доставки</p>
          <p>Доставка на дом</p>
          <p>Дата заказа</p>
          <p>Сумма заказа</p>
        </div>
        <div className="grid gap-y-[20px]">
          <StatusButton bg="#EDFEED" textColor="#6CBD6C" title="Доставлено" />
          <p className="text-[#212121] font-[500]">{deliveryDate}</p>
          <p className="text-[#212121] font-[500]">{addres}</p>
          <p className="text-[#212121] font-[500]">{deliveryOrder}</p>
          <p className="text-[#212121] font-[500]">{price} uzs</p>
        </div>
      </div>
      <div className="inline-block border-b-[2px] border-[#80848F]">
        <p className="text-[#80848f]  text-[14px] mt-[20px] font-[400]">
          Электронный чек
        </p>
      </div>
      <div className="h-[1px] w-full bg-[#E2E3E5] mt-[16px]"></div>
    </>
  );
};
export { ProfileItem, StatusButton, StatusCard };
