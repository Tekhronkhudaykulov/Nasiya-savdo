import { DocumentWithShieldBig } from "../../../assets/icon";
import { ASSETS } from "../../../assets/img/assets";

function ProfileButtons() {
  return (
    <div className="bg-[#F9F9F9] py-[21px] md:px-[30px] px-4 rounded-[10px]">
      <div className="flex max-md:flex-col items-center gap-x-[30px]">
        <DocumentWithShieldBig />
        <p className="text-[#212121] md:text-[20px] text-[14px] max-md:text-center max-md:text-txtSecondary font-[400] max-w-[480px] leading-[1.4]">
          Для покупки в рассрочки надо пройти идентификацию через мобильное
          приложение
        </p>
      </div>
      <div className="mt-[30px] flex max-md:flex-col items-center gap-[12px]">
        <img className="cursor-pointer" src={ASSETS.playMarket} alt="" />
        <img className="cursor-pointer" src={ASSETS.appStore} alt="" />
      </div>
    </div>
  );
}

export default ProfileButtons;
