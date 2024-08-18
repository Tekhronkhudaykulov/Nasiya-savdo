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
interface Order {
  id: string;
  status: "delivered" | "progress";
  orderDate: string;
  deliveryDate?: string;
  shipmentDate?: string;
  senderCity?: string;
  senderLocation?: string;
  productWeight?: string;
  productVolume?: string;
  deliveryLocation: string;
  price: string;
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

interface ButtonStatus {
  bg: string;
  textColor: string;
  title: string;
}

const StatusButton = ({ bg, textColor, title }: ButtonStatus) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="rounded-[4px] text-[12px] self-start p-[5px_16px] flex items-center justify-center"
    >
      <p className={`${textColor} font-[500]`}>{title}</p>
    </div>
  );
};

export default StatusButton;

const StatusCard = ({ order }: { order: Order }) => {
  console.log(order);

  const renderStatusDetails = () => {
    if (status === "delivered") {
      return (
        <>
          <StatusButton
            bg="#EDFEED"
            textColor="text-[#6cbd6c]"
            title="Доставлено"
          />
          <p className="text-[#212121] font-[500] text-[14px]">
            {deliveryDate}
          </p>
          <p className="text-[#212121] font-[500] text-[14px]">
            {deliveryLocation}
          </p>
          <p className="text-[#212121] font-[500] text-[14px]">{orderDate}</p>
          <p className="text-[#212121] font-[500] text-[14px]">{price} uzs</p>
        </>
      );
    } else if (status === "progress") {
      return (
        <>
          <StatusButton
            bg="#FFF4E5"
            textColor="text-[#FFA500]"
            title="В процессе доставки"
          />
          <p className="text-[#212121] font-[500] text-[14px]">
            {shipmentDate}
          </p>
          <p className="text-[#212121] font-[500] text-[14px]">{senderCity}</p>
          <p className="text-[#212121] font-[500] text-[14px]">
            {senderLocation}
          </p>
          <p className="text-[#212121] font-[500] text-[14px]">
            {productWeight} / {productVolume}
          </p>
          <p className="text-[#212121] font-[500] text-[14px]">{price} uzs</p>
        </>
      );
    }
  };

  return (
    <>
      <div className="flex gap-x-[35px] mt-[16px]">
        <div className="order-text grid gap-y-[20px]">
          <p>Статус</p>
          {status === "delivered" ? (
            <>
              <p>Дата доставки</p>
              <p>Доставка на дом</p>
            </>
          ) : (
            <>
              <p>Дата отправления</p>
              <p>Город отправителя</p>
              <p>Адрес отправителя</p>
              <p>Вес / Объем</p>
            </>
          )}
          <p>Дата заказа</p>
          <p>Сумма заказа</p>
        </div>
        <div className="flex flex-col gap-y-[20px]">
          {renderStatusDetails()}
        </div>
      </div>
      <div className="inline-block border-b-[2px] border-[#80848F]">
        <button className="text-[#80848f] text-[14px] mt-[20px] font-[400]">
          Электронный чек
        </button>
      </div>
      <div className="h-[1px] w-full bg-[#E2E3E5] mt-[16px]"></div>
    </>
  );
};

// export default StatusCard;

export { ProfileItem, StatusButton, StatusCard };
