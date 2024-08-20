import { Categories } from "../../components";
import CategLeft from "./components/CategLeft";
import CategRight from "./components/CategRight";
function CategoryPage() {
  return (
    <>
      <Categories />
      <h1 className="text-[24px] mt-[36px] mb-[20px] text-txtSecondary2 font-normal">
        Категории
      </h1>
      <div className="grid lg:grid-cols-[285px_1fr] gap-5">
        <CategLeft />
        <CategRight />
      </div>
    </>
  );
}

export default CategoryPage;
