import { Button } from "antd";
import { ASSETS } from "../../../assets/img/assets";
import OrderEmpty from "../../../empty/OrderEmpty";
import { useState } from "react";

const ProfileSale = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <>
      <div>
        <div className="flex gap-x-[12px] justify-start">
          <Button
            className={`max-md:px-4 max-md:text-[14px]  ${
              activeTab === "tab1" ? "active-orders-button" : "default"
            } `}
            onClick={() => setActiveTab("tab1")}
          >
            Все
          </Button>
          <Button
            className={`max-md:px-4 max-md:text-[14px]  ${
              activeTab === "tab2" ? "active-orders-button" : "default"
            } `}
            onClick={() => setActiveTab("tab2")}
          >
            Рассрочка и Оплата После Доставки
          </Button>
          <Button
            className={`max-md:px-4 max-md:text-[14px]  ${
              activeTab === "tab3" ? "active-orders-button" : "default"
            } `}
            onClick={() => setActiveTab("tab3")}
          >
            Завершенные
          </Button>
        </div>
        {/* {activeTab === "tab1" && (
          <>
            <div className="border-line border-[1px] mt-[20px] md:p-[20px] p-4 rounded-[16px]">
              <p className="font-[500] text-[#212121] text-[16px]">
                ID заказа 123456789
              </p>
              <StatusCard
                addres="Юнус-абад 16, Улица Хийобон 77, дом-12, квартира 23, "
                deliveryDate="22.04.2024"
                price="17 568 000"
                deliveryOrder="21.04.2024"
              />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="!bg-none !text-[#03A5A5]"
                >
                  Подробнее
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex">
                    <img className="mr-[15px]" src={ASSETS.SmallImg} alt="" />
                    <div className="mt-[8px]">
                      <p className="font-[600] text-[#212121] text-[16px]">
                        Apple iPhone 15 Pro Max
                      </p>
                      <div className="flex gap-x-[12px] mt-[6px]">
                        <p className="text-[#80848F] text-[12px]">256 Гб</p>
                        <p className="text-[#80848F] text-[12px]">
                          Натуральный титан
                        </p>
                      </div>
                      <div className="mt-[16px] ">
                        <p className="font-[600] text-[#212121] text-[16px]">
                          17 568 000 uzs
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="border-line border-[1px] mt-[20px] p-[20px] rounded-[16px]">
              <p className="font-[500] text-[#212121] text-[16px]">
                ID заказа 123456789
              </p>
              <StatusCard
                addres="Юнус-абад 16, Улица Хийобон 77, дом-12, квартира 23, "
                deliveryDate="22.04.2024"
                price="17 568 000"
                deliveryOrder="21.04.2024"
              />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="!bg-none !text-[#03A5A5]"
                >
                  Подробнее
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex">
                    <img className="mr-[15px]" src={ASSETS.SmallImg} alt="" />
                    <div className="mt-[8px]">
                      <p className="font-[600] text-[#212121] text-[16px]">
                        Apple iPhone 15 Pro Max
                      </p>
                      <div className="flex gap-x-[12px] mt-[6px]">
                        <p className="text-[#80848F] text-[12px]">256 Гб</p>
                        <p className="text-[#80848F] text-[12px]">
                          Натуральный титан
                        </p>
                      </div>
                      <div className="mt-[16px] ">
                        <p className="font-[600] text-[#212121] text-[16px]">
                          17 568 000 uzs
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="border-line border-[1px] mt-[20px] p-[20px] rounded-[16px]">
              <p className="font-[500] text-[#212121] text-[16px]">
                ID заказа 123456789
              </p>
              <StatusCard
                addres="Юнус-абад 16, Улица Хийобон 77, дом-12, квартира 23, "
                deliveryDate="22.04.2024"
                price="17 568 000"
                deliveryOrder="21.04.2024"
              />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="!bg-none !text-[#03A5A5]"
                >
                  Подробнее
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex">
                    <img className="mr-[15px]" src={ASSETS.SmallImg} alt="" />
                    <div className="mt-[8px]">
                      <p className="font-[600] text-[#212121] text-[16px]">
                        Apple iPhone 15 Pro Max
                      </p>
                      <div className="flex gap-x-[12px] mt-[6px]">
                        <p className="text-[#80848F] text-[12px]">256 Гб</p>
                        <p className="text-[#80848F] text-[12px]">
                          Натуральный титан
                        </p>
                      </div>
                      <div className="mt-[16px] ">
                        <p className="font-[600] text-[#212121] text-[16px]">
                          17 568 000 uzs
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </>
        )}
        {activeTab === "tab2" && (
          <>
            <div className="border-line border-[1px] mt-[20px] p-[20px] rounded-[16px]">
              <p className="font-[500] text-[#212121] text-[16px]">
                ID заказа 123456789
              </p>
              <StatusCard
                addres="Юнус-абад 16, Улица Хийобон 77, дом-12, квартира 23, "
                deliveryDate="22.04.2024"
                price="17 568 000"
                deliveryOrder="21.04.2024"
              />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="!bg-none text-[#03A5A5]"
                >
                  Подробнее
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex">
                    <img className="mr-[15px]" src={ASSETS.SmallImg} alt="" />
                    <div className="mt-[8px]">
                      <p className="font-[600] text-[#212121] text-[16px]">
                        Apple iPhone 15 Pro Max
                      </p>
                      <div className="flex gap-x-[12px] mt-[6px]">
                        <p className="text-[#80848F] text-[12px]">256 Гб</p>
                        <p className="text-[#80848F] text-[12px]">
                          Натуральный титан
                        </p>
                      </div>
                      <div className="mt-[16px] ">
                        <p className="font-[600] text-[#212121] text-[16px]">
                          17 568 000 uzs
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="border-line border-[1px] mt-[20px] p-[20px] rounded-[16px]">
              <p className="font-[500] text-[#212121] text-[16px]">
                ID заказа 123456789
              </p>
              <StatusCard
                addres="Юнус-абад 16, Улица Хийобон 77, дом-12, квартира 23, "
                deliveryDate="22.04.2024"
                price="17 568 000"
                deliveryOrder="21.04.2024"
              />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="!bg-none text-[#03A5A5]"
                >
                  Подробнее
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex">
                    <img className="mr-[15px]" src={ASSETS.SmallImg} alt="" />
                    <div className="mt-[8px]">
                      <p className="font-[600] text-[#212121] text-[16px]">
                        Apple iPhone 15 Pro Max
                      </p>
                      <div className="flex gap-x-[12px] mt-[6px]">
                        <p className="text-[#80848F] text-[12px]">256 Гб</p>
                        <p className="text-[#80848F] text-[12px]">
                          Натуральный титан
                        </p>
                      </div>
                      <div className="mt-[16px] ">
                        <p className="font-[600] text-[#212121] text-[16px]">
                          17 568 000 uzs
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </>
        )} */}
        <div className="flex items-center mt-[20px]  justify-center flex-col bg-[#FFFFFF] py-[40px] rounded-[18px]  border border-[#E2E3E5]">
          <OrderEmpty
            title="У вас нет рассрочки"
            desc="Загляните на главную, чтобы выбрать то что по душе"
            img={ASSETS.Vallet}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileSale;
