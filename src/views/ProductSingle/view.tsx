import { BreadCrumb } from "../../components";
import { useEffect, useState } from "react";

import { ProductsSection } from "../../sections";
import AboutProductPopUp from "./components/AboutProductPopUp";
import SingleProductRight from "./components/SingleProductRight";
import SingleProductLeft from "./components/SingleProductLeft";
import ReviewProductPopUp from "./components/ReviewProductPopUp";

function ProductSingle() {
  const [aboutPopUp, setAboutPopUp] = useState(false);
  const [reviewPopUp, setReviewPoUp] = useState(false);

  useEffect(() => {
    if (aboutPopUp || reviewPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [aboutPopUp, reviewPopUp]);
  return (
    <>
      <BreadCrumb items={[{ name: "Продукт название" }]} />
      <div className="grid lg:grid-cols-[2fr,1fr] gap-[28px] mb-[60px]">
        <SingleProductLeft
          setAboutPopUp={setAboutPopUp}
          setReviewPoUp={setReviewPoUp}
        />
        <SingleProductRight />
      </div>
      {aboutPopUp && <AboutProductPopUp setAboutPopUp={setAboutPopUp} />}
      {reviewPopUp && <ReviewProductPopUp setReviewPoUp={setReviewPoUp} />}
      <ProductsSection
        className="mt-[48px]"
        title="Ещё может подойти"
        products={[...Array(5)]}
      />
      <ProductsSection
        className="mt-[48px]"
        title="Просмотренные товары"
        products={[...Array(5)]}
      />
    </>
  );
}

export default ProductSingle;
