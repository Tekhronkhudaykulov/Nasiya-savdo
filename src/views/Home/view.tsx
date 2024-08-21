import { Banner, Categories } from "../../components";
import { AdvertisingSection, ProductsSection } from "../../sections";

const Home = () => {
  return (
    <>
      <Categories />
      <Banner />
      <ProductsSection
        className="md:mt-[48px] mt-[20px]"
        title="Новинки"
        products={[...Array(10)]}
      />
      <ProductsSection
        className="md:mt-[48px] mt-[20px]"
        title="Распродажа"
        products={[...Array(10)]}
      />
      <AdvertisingSection />
      <ProductsSection products={[...Array(10)]} />
    </>
  );
};

export default Home;
