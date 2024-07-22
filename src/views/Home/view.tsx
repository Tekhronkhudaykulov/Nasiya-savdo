import BreadCrumb from "../../components/breadCump/view";
import Card from "../../components/card/view";
import SendCode from "../../modal/auth/SendCode";

const Home = () => {
  return (
    <div>
      <SendCode />
      <BreadCrumb items={[{ name: "Продукт название" }]} />
      <Card />
    </div>
  );
};

export default Home;
