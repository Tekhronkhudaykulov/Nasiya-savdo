import { ASSETS } from "../../../assets/img/assets";
import ProfileCardEmpty from "../../../empty/ProfileCardEmpty";
import { modalsStore } from "../../../store";
import AddCard from "../component/AddCard";

const ProfileCard = () => {
  const { openModal } = modalsStore();
  return (
    <>
      <div>
        <div className="flex items-center   justify-center flex-col bg-[#FFFFFF] py-[40px] rounded-[18px]  border border-[#E2E3E5]">
          <ProfileCardEmpty
            title="Вы еше не добавили карту"
            img={ASSETS.Vallet}
            onClick={() => openModal("card_payment")}
          />
        </div>
      </div>
      <AddCard />
    </>
  );
};

export default ProfileCard;
