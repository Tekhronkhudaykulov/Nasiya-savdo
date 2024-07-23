import { Button } from "antd";
import { CategoryIcon } from "../../../assets/icon";

const Category = () => {
  return (
    <>
      <Button
        icon={<CategoryIcon />}
        type="primary"
        className="rounded-[100px]"
      >
        Категории
      </Button>
    </>
  );
};

export default Category;
