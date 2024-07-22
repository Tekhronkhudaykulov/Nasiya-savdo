import BreadCrumb from "../../components/breadCump/view";
import Card from "../../components/card/view";

const Home = () => {
  return (
    <div>
      <BreadCrumb items={[{ name: "Продукт название" }]} />
      <Card />
    </div>
  );
};

export default Home;
