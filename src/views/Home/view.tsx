import { Banner, Categories } from "../../components";
import { AdvertisingSection, ProductsSection } from "../../sections";

const Home = () => {
  return (
    <>
      <Categories />
      <Banner />
      <ProductsSection
        className="mt-[48px]"
        title="Новинки"
        products={[...Array(10)]}
      />
      <ProductsSection
        className="mt-[48px]"
        title="Распродажа"
        products={[...Array(10)]}
      />
      <AdvertisingSection />
      <ProductsSection products={[...Array(10)]} />
    </>
  );
};

export default Home;
