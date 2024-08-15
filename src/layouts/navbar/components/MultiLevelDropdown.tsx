import MainCateg from "./MainCateg";
import { useState } from "react";
import SubCateg from "./SubCateg";
import SubCategLast from "./SubCategLast";
import { CategoriesDatas } from "../../../data/CategData";

const MultiLevelDropdown = () => {
  const [activeCategory, setActiveCategory] = useState<number | undefined>(
    undefined
  );
  const [activeSubCategory, setActiveSubCategory] = useState<
    number | undefined
  >(undefined);
  const [activeSubSubCategory, setActiveSubSubCategory] = useState<
    number | undefined
  >(undefined);

  return (
    <div className="dropdown-container fixed top-0 h-screen overflow-auto z-[20] bg-[#fff] w-full py-4">
      <div className="wrapper flex h-full">
        <div className="grid grid-cols-4 w-full pt-[100px] h-full gap-5">
          {/* Main Categories */}
          <div className="flex flex-col">
            {CategoriesDatas?.map((categ, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setActiveCategory(index);
                  setActiveSubCategory(undefined);
                  setActiveSubSubCategory(undefined);
                }}
              >
                <MainCateg
                  activeArrow={
                    categ.subcategories && categ.subcategories.length > 0
                  }
                  active={index === activeCategory}
                  categ={categ}
                />
              </div>
            ))}
          </div>

          {/* Subcategories */}
          <div className="flex flex-col h-max sticky top-[100px]">
            {activeCategory !== undefined &&
              CategoriesDatas[activeCategory]?.subcategories?.map(
                (subCateg, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setActiveSubCategory(index);
                      setActiveSubSubCategory(undefined);
                    }}
                  >
                    <SubCateg
                      activeArrow={
                        subCateg.subcategories &&
                        subCateg.subcategories.length > 0
                      }
                      active={index === activeSubCategory}
                      subCateg={subCateg}
                    />
                  </div>
                )
              )}
          </div>

          {/* Sub-Subcategories */}
          <div className="flex flex-col h-max sticky top-[100px]">
            {activeCategory !== undefined &&
              activeSubCategory !== undefined &&
              CategoriesDatas[activeCategory]?.subcategories?.[
                activeSubCategory
              ]?.subcategories?.map((subCateg, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveSubSubCategory(index)}
                >
                  <SubCateg
                    activeArrow={
                      subCateg.subcategories &&
                      subCateg.subcategories.length > 0
                    }
                    active={index === activeSubSubCategory}
                    subCateg={subCateg}
                  />
                </div>
              ))}
          </div>

          {/* Sub-Sub-Subcategories */}
          <div className="flex flex-col h-max sticky top-[100px]">
            {activeCategory !== undefined &&
              activeSubCategory !== undefined &&
              activeSubSubCategory !== undefined &&
              CategoriesDatas[activeCategory]?.subcategories?.[
                activeSubCategory
              ]?.subcategories?.[activeSubSubCategory]?.subcategories?.map(
                (subCateg, index) => (
                  <div key={index}>
                    <SubCategLast subCateg={subCateg} />
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLevelDropdown;
