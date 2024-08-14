
import { BreadCrumb } from "../../components";
import { useEffect, useState } from "react";

import { ProductsSection } from "../../sections";
import AboutProductPopUp from "./components/AboutProductPopUp";
import SingleProductRight from "./components/SingleProductRight";
import SingleProductLeft from "./components/SingleProductLeft";

function ProductSingle() {
  const [aboutPopUp, setAboutPopUp] = useState(false);
  const [reviewPopUp, setReviewPoUp] = useState(false);

  useEffect(() => {
    if (aboutPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [aboutPopUp]);
  return (
    <>
      <BreadCrumb items={[{ name: "Продукт название" }]} />
      <div className="grid lg:grid-cols-[2fr,1fr] gap-[28px] mb-[60px]">
        <SingleProductLeft setAboutPopUp={setAboutPopUp} />
        <SingleProductRight />
      </div>
      {aboutPopUp && <AboutProductPopUp setAboutPopUp={setAboutPopUp} />}
      {reviewPopUp && <AboutProductPopUp setAboutPopUp={setAboutPopUp} />}
      <ProductsSection title="Ещё может подойти" products={[...Array(5)]} />
      <ProductsSection title="Просмотренные товары" products={[...Array(5)]} />
    </>
  );
}

export default ProductSingle;
