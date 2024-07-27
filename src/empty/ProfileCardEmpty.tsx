import { Button } from "antd";

const ProfileCardEmpty = ({ img, title, onClick }: any) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img src={img} alt="" />
      <p className="w-[230px] text-center leading-[28px] text-[#212121] font-[600] md:text-[24px] mt-[20px]">
        {title}
      </p>
      <div className=" mt-[30px]">
        <div className="w-[400px]">
          <Button
            className="!bg-darkGreen    !text-white w-full h-[56px] rounded-[8px] text-[16px] font-[500]"
            type="default"
            onClick={onClick}
          >
            Добавить карту
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardEmpty;
