import { Banner, Categories } from "../../components";
import { AdvertisingSection, ProductsSection } from "../../sections";

const Home = () => {
  return (
    <>
      <Categories />
      <div className="wrapper">
        <Banner />
        <ProductsSection title="Новинки" products={[...Array(10)]} />
        <ProductsSection title="Распродажа" products={[...Array(10)]} />
        <AdvertisingSection />
        <ProductsSection products={[...Array(10)]} />
      </div>
    </>
  );
};

export default Home;
