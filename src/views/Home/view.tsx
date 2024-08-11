import { Banner, Categories } from "../../components";
import { AdvertisingSection, ProductsSection } from "../../sections";

const Home = () => {
  return (
    <>
      <Categories />
      <Banner />
      <ProductsSection title="Новинки" products={[...Array(10)]} />
      <ProductsSection title="Распродажа" products={[...Array(10)]} />
      <AdvertisingSection />
      <ProductsSection products={[...Array(10)]} />
    </>
  );
};

export default Home;
