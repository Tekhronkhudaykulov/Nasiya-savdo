import { Select } from "antd";
import "./selectArea.scss";

interface Props {
  className?: string;
}

const SelectArea = ({ className }: Props) => {
  return (
    <Select className={`select-area h-[40px] ${className}`} defaultValue={"1"}>
      <Select.Option value="1">Ташкент</Select.Option>
    </Select>
  );
};

export default SelectArea;
