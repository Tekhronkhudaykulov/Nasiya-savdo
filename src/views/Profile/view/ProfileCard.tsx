import { ASSETS } from "../../../assets/img/assets";

import ProfileCardEmpty from "../../../empty/ProfileCardEmpty";

const ProfileCard = () => {
  return (
    <>
      <div>
        <div className="flex items-center   justify-center flex-col bg-[#FFFFFF] py-[40px] rounded-[18px]  border border-[#E2E3E5]">
          <ProfileCardEmpty
            title="Вы еше не добавили карту"
            img={ASSETS.Vallet}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
