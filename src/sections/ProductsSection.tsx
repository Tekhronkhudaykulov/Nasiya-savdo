import { ReactNode } from "react";
import { Card, Title } from "../components";

interface Props {
  className?: string;
  title?: ReactNode | string;
  products: any[];
}

const ProductsSection = ({ className, title, products }: Props) => {
  return (
    <div className={`${className} mt-[48px]`}>
      {title ? <Title title={title} /> : null}
      <div className="grid grid-cols-5 gap-x-5 gap-y-[36px]">
        {products?.map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
