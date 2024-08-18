import { Accordion, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import ProductInMore from "./ProductInMore";
import OrderInfos from "./OrderInfos";

interface Product {
  name: string;
  quantity: number;
  price: string;
}

interface Order {
  id: string;
  status: "delivered" | "progress";
  orderDate: string;
  shipmentDate?: string;
  sentDate?: string;
  senderCity?: string;
  senderLocation?: string;
  productWeight?: string;
  productVolume?: string;
  deliveryLocation: string;
  price: string;
  products: Product[];
}
function OrderInfoCard({ order }: { order: Order }) {
  return (
    <div className="border-line border-[1px] mt-[20px] md:p-[20px] p-4 rounded-[16px]">
      <p className="font-[500] text-[#212121] text-[16px]">
        ID заказа {order.id}
      </p>
      <OrderInfos order={order} />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Подробнее
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-4">
            {order.products.map((_, index: number) => (
              <ProductInMore key={index} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default OrderInfoCard;
