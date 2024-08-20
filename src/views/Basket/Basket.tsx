import { BreadCrumb } from "../../components";
import BasketProducts from "./components/BasketProducts";

function Basket() {
  return (
    <>
      <BreadCrumb items={[{ name: "Корзина" }]} />
      {/* <EmptyBasket /> */}
      <BasketProducts />
    </>
  );
}

export default Basket;
