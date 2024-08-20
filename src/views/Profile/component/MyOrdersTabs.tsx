import { Button } from "antd";

function MyOrdersTabs({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: any;
  activeTab: string;
}) {
  return (
    <div className="flex gap-x-[12px] justify-start">
      <Button
        className={`max-md:px-4 max-md:text-[14px]  ${
          activeTab === "all" ? "active-orders-button" : "default"
        } `}
        onClick={() => setActiveTab("all")}
      >
        Все
      </Button>
      <Button
        className={`max-md:px-4 max-md:text-[14px]  ${
          activeTab === "progress" ? "active-orders-button" : "default"
        } `}
        onClick={() => setActiveTab("progress")}
      >
        В процессе
      </Button>
      <Button
        className={`max-md:px-4 max-md:text-[14px]  ${
          activeTab === "delivered" ? "active-orders-button" : "default"
        } `}
        onClick={() => setActiveTab("delivered")}
      >
        История заказов
      </Button>
    </div>
  );
}

export default MyOrdersTabs;
