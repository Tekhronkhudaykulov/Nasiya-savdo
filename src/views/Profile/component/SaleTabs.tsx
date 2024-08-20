import { Button } from "antd";

function SaleTabs({
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
        Рассрочки
      </Button>
      <Button
        className={`max-md:px-4 max-md:text-[14px]  ${
          activeTab === "finished" ? "active-orders-button" : "default"
        } `}
        onClick={() => setActiveTab("finished")}
      >
        Завершенные
      </Button>
    </div>
  );
}

export default SaleTabs;
