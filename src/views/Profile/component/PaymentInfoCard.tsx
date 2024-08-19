import { Accordion, AccordionDetails, Typography } from "@mui/material";
import PaymentStatus from "./PaymentStatus";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useState } from "react";
import { PaymentCancel, PaymentDone } from "../../../assets/icon";

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

function PaymentInfoCardHead({ plan }: { plan: InstallmentPlan }) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col gap-[6px]">
        <h2 className="text-[20px] font-semibold text-mainBlack leading-[1.2]">
          Договор #{plan.id}
        </h2>
        <span className="text-txtSecondary2 leading-[1.2] text-[14px] font-medium">
          Остаток: 123 000
        </span>
      </div>
      <PaymentStatus status={plan.status} />
    </div>
  );
}

function PaymentInfoCardStep({ plan }: { plan: InstallmentPlan }) {
  const totalPayments = plan.monthlyPayments.length;
  const paidPayments = plan.monthlyPayments.filter(
    (payment) => payment.status === "paid"
  ).length;
  return (
    <div className="flex flex-col gap-[9px] bg-white p-[16px_20px] rounded-[12px]">
      <div className="flex items-center gap-[26px]">
        <h2 className="text-[20px] text-darkGreen font-bold">
          {plan.monthlyPayments[0].paymentAmount}
        </h2>
        <span className="text-[14px] font-medium text-txtSecondary2">
          Следующая оплата: {plan.monthlyPayments[0].paymentDate}
        </span>
        <div className="flex text-[14px] items-center gap-[4px] ml-auto">
          <span className="text-mainBlack font-medium">
            {" "}
            {paidPayments}/{totalPayments}
          </span>
          <span className="text-txtSecondary2 font-medium">Оплачено</span>
        </div>
      </div>
      <div className="flex gap-2">
        {plan.monthlyPayments.map((month) => (
          <div
            className={`${
              month.status === "paid"
                ? "bg-[#6CBD6C]"
                : month.status === "overdue"
                ? "bg-[#FF4D4F]"
                : "bg-[#E2E3E5]"
            } flex-grow rounded-[4px] h-[10px]`}
          ></div>
        ))}
      </div>
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
      <button className="text-[16px] ml-auto max-w-[330px] w-full font-medium p-[14px] bg-darkGreen rounded-[8px] text-white">
        Оплатить
      </button>
    </div>
  );
}

function PaymentInfoCard({ plan }: { plan: InstallmentPlan }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <div className="bg-buttonBg rounded-[16px] p-[20px] flex flex-col gap-5">
      <PaymentInfoCardHead plan={plan} />
      <PaymentInfoCardStep plan={plan} />
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
                <h3 className="text-[20px] text-mainBlack font-semibold">
                  График платежей
                </h3>
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
  );
}

export default PaymentInfoCard;
