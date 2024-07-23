import { Input } from "antd";
import { SearchIcon } from "../../../assets/icon";

const Search = () => {
  return (
    <Input.Search
      className="nav-search"
      size="large"
      placeholder="Искать товары и категории"
      enterButton={
        <div className="flex items-center gap-[6px]">
          <SearchIcon />
          Поиск
        </div>
      }
    />
  );
};

export default Search;
