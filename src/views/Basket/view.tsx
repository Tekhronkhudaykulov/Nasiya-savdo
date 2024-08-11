import BreadCrumb from "../../components/breadCump/view";
import EmptyBasket from "../../components/EmptyBusket/view";

function Basket() {
  return (
    <>
      <BreadCrumb items={[{ name: "Корзина" }]} />
      <EmptyBasket />
    </>
  );
}

export default Basket;
