import { ReactNode, useState } from "react";
import { Card, Title } from "../components";
import SendNum from "../modal/auth/SendNum";
import SendCode from "../modal/auth/SendCode";

interface Props {
  className?: string;
  title?: ReactNode | string;
  products: any[];
}

const ProductsSection = ({ className, title, products }: Props) => {
  const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  return (
    <>
      {isNumberModalOpen && (
        <SendNum
          setIsCodeModalOpen={setIsCodeModalOpen}
          isNumberModalOpen={isNumberModalOpen}
          setIsNumberModalOpen={setIsNumberModalOpen}
        />
      )}
      {isCodeModalOpen && (
        <SendCode
          isCodeModalOpen={isCodeModalOpen}
          setIsCodeModalOpen={setIsCodeModalOpen}
        />
      )}
      <div className={`${className} mt-[48px]`}>
        {title ? <Title title={title} /> : null}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-5 gap-y-[36px]">
          {products?.map((_, idx) => (
            <Card setIsNumberModalOpen={setIsNumberModalOpen} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
