import ProfileButtons from "../component/ProfileButtons";
import ProfileSuccess from "../component/ProfileSuccess";
import ProfileInputs from "../component/ProfileInputs";

const ProfileAccount = () => {
  return (
    <>
      <div className="border border-line rounded-[18px] h-max md:p-[36px] px-4 py-5">
        <p className="text-[#212121] font-[600] text-[20px] mb-[30px]">
          Мои данные
        </p>
        <div className="flex flex-col gap-[60px]">
          <ProfileInputs />
          <ProfileButtons />
          <ProfileSuccess />
        </div>
      </div>
    </>
  );
};

export default ProfileAccount;
