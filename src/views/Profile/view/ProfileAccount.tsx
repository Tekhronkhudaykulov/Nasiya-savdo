import { InputMask } from "@react-input/mask";
import { ASSETS } from "../../../assets/img/assets";
import PhoneInput from "react-phone-input-2";
import { ProfileItem } from "../component/view";

const ProfileAccount = () => {
  return (
    <>
      {/* <div className="flex items-center justify-center flex-col bg-[#FFFFFF] py-[40px] rounded-[18px]  border border-[#E2E3E5]">
        <ProfileItem
          img={<InformationIcon />}
          title="Пройдите верификацию через мобильное приложение"
          desc="Для покупки товаров нужно пройти верификацию и скоринг"
        />
        <div className="w-[253px] mt-[60px]">
          <Button
            className="!bg-gradient-to-r from-[#003393] !text-white text-[16px] h-[46px] w-full !rounded-[100px]"
            variant="outlined"
          >
            Профиль
          </Button>
        </div>
      </div> */}
      <div className="border border-line rounded-[18px] md:p-[36px] px-4 py-5">
        <p className="text-[#212121] font-[400] text-[16px] mb-[30px]">
          Мои данные
        </p>
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
        <div className="mt-[60px] bg-[#F9F9F9] py-[21px] md:px-[30px] px-4">
          <div className="flex max-md:flex-col items-center gap-x-[35px]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66552 15V8.33333C6.66552 6.49238 8.15791 5 9.99886 5H31.6655C33.5065 5 34.9989 6.49238 34.9989 8.33333V31.6667C34.9989 33.5076 33.5065 35 31.6655 35H19.9989M28.3322 13.3333H13.3322M28.3324 19.9997H21.6657M28.3322 26.667H24.9989M16.6654 23.8221V28.3991C16.6654 31.4334 13.0636 33.7151 11.152 34.7148C10.4314 35.0949 9.56984 35.0956 8.8487 34.7165C6.93776 33.7172 3.33203 31.4303 3.33203 28.3991V23.8223C3.33867 23.3812 3.68563 23.0206 4.12611 22.9969C5.89749 22.8544 7.59329 22.2175 9.02048 21.1587C9.60063 20.7253 10.3968 20.7253 10.9769 21.1587C12.4041 22.2175 14.0998 22.8544 15.8712 22.9969C16.3092 23.0258 16.6533 23.3833 16.6654 23.8221Z"
                stroke="url(#paint0_linear_2219_27111)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2219_27111"
                  x1="3.33203"
                  y1="5"
                  x2="33.2886"
                  y2="36.6206"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#75C6C6" />
                  <stop offset="1" stop-color="#027373" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-[#212121] md:text-[20px] text-[14px] max-md:text-center max-md:text-txtSecondary font-[400] max-w-[480px] leading-[28px]">
              Для покупки в рассрочки надо пройти идентификацию через мобильное
              приложение
            </p>
          </div>
          <div className="mt-[30px] flex max-md:flex-col items-center gap-[12px]">
            <img src={ASSETS.playMarket} alt="" />
            <img src={ASSETS.appStore} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAccount;
