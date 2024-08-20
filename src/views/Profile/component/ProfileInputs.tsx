import PhoneInput from "react-phone-input-2";

function ProfileInputs() {
  return (
    <div className="grid md:grid-cols-3 gap-x-[14px] gap-y-[16px] ">
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-[#F9F9F9] outline-none border-none pl-[25px]"
        placeholder="Имя"
      />
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-[#F9F9F9] outline-none border-none pl-[25px]"
        placeholder="Фамилия"
      />
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-[#F9F9F9] outline-none border-none pl-[25px]"
        placeholder="Отчество"
      />
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-[#F9F9F9] outline-none border-none pl-[25px]"
        placeholder="Дата рождение"
      />
      <PhoneInput
        country={"uz"}
        defaultMask={"(..) ...-..-.."}
        placeholder="+998"
        alwaysDefaultMask={true}
        specialLabel=""
        inputClass="h-[60px] rounded-[10px] bg-[#F9F9F9] outline-none border-none pl-[25px] w-full"
      />
    </div>
  );
}

export default ProfileInputs;
