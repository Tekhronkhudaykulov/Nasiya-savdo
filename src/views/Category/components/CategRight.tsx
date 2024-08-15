import { ProductsSection } from "../../../sections";
import CategRightHead from "./CategRightHead";

function CategRight() {
  return (
    <div className="flex flex-col gap-[36px]">
      <CategRightHead />
      <ProductsSection products={[...Array(20)]} />
    </div>
  );
}

export default CategRight;
