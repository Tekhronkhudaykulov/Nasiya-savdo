import { BreadCrumb } from "../../components";
<<<<<<< HEAD
=======
// import EmptyBasket from "../../components/EmptyBusket/view";
>>>>>>> refs/remotes/origin/elshod
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
