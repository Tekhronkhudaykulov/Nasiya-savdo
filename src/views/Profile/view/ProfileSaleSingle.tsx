import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { PaymentCancel, PaymentDone } from "../../../assets/icon";
import PaymentStatus from "../component/PaymentStatus";
import { ASSETS } from "../../../assets/img/assets";
import PayButton from "../component/PayButton";

type PaymentStatusProps = "Просрочен" | "Активный" | "Отменен" | "Заверщен";

interface MonthlyPayment {
  paymentDate: string;
  paymentAmount: string;
  remainingBalance: string;
  status: "paid" | "overdue" | "upcoming";
}

interface InstallmentPlan {
  id: string;
  planType: "3-month" | "12-month";
  totalPrice: string;
  status: PaymentStatusProps;
  monthlyPayments: MonthlyPayment[];
}
const plan: InstallmentPlan = {
  id: "122131234",
  planType: "12-month",
  totalPrice: "15 000 000",
  status: "Просрочен", // Main status for this plan
  monthlyPayments: [
    {
      paymentDate: "20.09.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "13 750 000",
      status: "paid",
    },
    {
      paymentDate: "20.10.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "12 500 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "paid",
    },
    {
      paymentDate: "20.11.2024",
      paymentAmount: "1 250 000",
      remainingBalance: "11 250 000",
      status: "overdue",
    },
  ],
};
function PaymentInfoCardHead({ plan }: { plan: InstallmentPlan }) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col gap-[6px]">
        <Link
          to={`/profile/profile_sale_single`}
          className="text-[20px] font-semibold text-mainBlack leading-[1.2]"
        >
          Договор #{plan.id}
        </Link>
        <span className="text-txtSecondary2 leading-[1.2] text-[14px] font-medium">
          Остаток: 123 000
        </span>
      </div>
      <PaymentStatus status={plan.status} />
    </div>
  );
}

function GraphicCard({
  payment,
  index,
  length,
}: {
  payment: MonthlyPayment;
  index: number;
  length: number;
}) {
  return (
    <div
      className={`flex justify-between items-center py-4 border-line ${
        index + 1 !== length ? "border-b" : ""
      }`}
    >
      <div className="flex flex-col gap-1 text-[14px]">
        <span className="text-txtSecondary2 font-medium leading-[1.1]">
          {index + 1} месяц
        </span>
        <span className="text-mainBlack font-medium leading-[1.1]">
          25.12.2023
        </span>
      </div>
      <div className="flex flex-col gap-1 text-[14px]">
        <span className="text-txtSecondary2 font-medium leading-[1.1]">
          Сумма
        </span>
        <span className="text-mainBlack font-medium leading-[1.1]">
          85 000.35 сум
        </span>
      </div>
      <div
        className={`${
          payment.status === "paid"
            ? "bg-[#EDFEED] text-[#6CBD6C]"
            : payment.status === "overdue"
            ? "bg-[#FFEEEE] text-[#FF4D4F]"
            : "bg-[#E2E3E5] text-txtSecondary2"
        } p-[8px_16px] rounded-[4px] min-w-[135px] flex items-center justify-center gap-[10px]`}
      >
        <span>
          {payment.status === "paid"
            ? "Оплачен"
            : payment.status === "overdue"
            ? "Просрочен"
            : "Waiting"}
        </span>
        {payment.status === "paid" ? (
          <PaymentDone />
        ) : payment.status === "overdue" ? (
          <PaymentCancel />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function PaymentButton() {
  return (
    <div className="flex items-center gap-[36px] border-t border-line pt-4">
      <div className="flex flex-col gap-2 text-[14px] max-w-[170px] w-full">
        <span className="text-txtSecondary2 font-medium leading-[1.1]">
          К оплате за этот месяц:
        </span>
        <span className="text-mainBlack font-medium leading-[1.1]">
          85 000.35 сум
        </span>
      </div>
      <div className="flex flex-col gap-2 text-[14px] max-w-[170px] w-full">
        <span className="text-txtSecondary2 font-medium leading-[1.1]">
          Оплата за весь период:
        </span>
        <span className="text-mainBlack font-medium leading-[1.1]">
          85 000.35 сум
        </span>
      </div>
      <PayButton />
    </div>
  );
}

function PaymentProduct() {
  return (
    <div className="bg-white p-[12px_16px] rounded-[8px] flex gap-[16px]">
      <div className="w-[65px] h-[81px]">
        <img
          className="w-full h-full object-cover"
          src={ASSETS.SmallImg}
          alt=""
        />
      </div>
      <div className="flex items-start w-full gap-[7px]">
        <div className="flex flex-col w-full justify-between h-full">
          <h2 className="font-[600] text-[#212121] text-[16px]">
            Сковорода антипригарная Elegant, с крышкой, гранитное покрытие, 24,
            26, 28 см
          </h2>
          <div className="flex justify-between gap-[2px]">
            <p className="text-[#80848F] text-[12px] flex gap-1">
              Колво: <span className="text-mainBlack font-semibold">2</span>
            </p>
            <p className="text-[#80848F] text-[12px] flex gap-1">
              Цена:
              <span className="text-mainBlack font-semibold">156 000 сум</span>
            </p>
            <p className="text-[#80848F] text-[12px] flex gap-1">
              Рассрочка:
              <span className="text-mainBlack font-semibold">
                12x85 000.53 сум
              </span>
            </p>
            <p className="text-[#80848F] text-[12px] flex gap-1">
              Итого:
              <span className="text-mainBlack font-semibold">
                fitfillion sum
              </span>
            </p>
          </div>
        </div>
        <PayButton />
      </div>
    </div>
  );
}

function ProfileSaleSingle() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };
  return (
    <div>
      <Link
        to={`/profile/profile_sale`}
        className="flex items-center text-[12px] font-medium text-mainBlack gap-1 mb-5"
      >
        <FaChevronLeft className="text-[12px]" />
        Назад
      </Link>
      <div className="bg-buttonBg rounded-[16px] p-[20px] flex flex-col gap-5">
        <PaymentInfoCardHead plan={plan} />
        <PaymentProduct />
        <div className="rounded-[12px] overflow-hidden">
          <Accordion expanded={expanded} onChange={handleChange}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ px: 2 }}
            >
              <Typography className="w-full">
                <div className="flex justify-between w-full items-center">
                  <span className="text-[20px] text-mainBlack font-semibold">
                    График платежей
                  </span>
                  <span> {expanded ? "Свернуть" : "Развернуть"}</span>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="flex flex-col">
                  {plan.monthlyPayments.map((payment, index) => {
                    return (
                      <GraphicCard
                        length={plan.monthlyPayments.length}
                        index={index}
                        key={index}
                        payment={payment}
                      />
                    );
                  })}
                  {plan.status === "Просрочен" && <PaymentButton />}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ProfileSaleSingle;
