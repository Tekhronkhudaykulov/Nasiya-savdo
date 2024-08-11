import { useState } from "react";
import BreadCrumb from "../../components/breadCump/view";
import Card from "../../components/card/view";
import SendCode from "../../modal/auth/SendCode";
import SendNum from "../../modal/auth/SendNum";
import EmptyFavourite from "../../components/EmptyFavourite/view";

function Favourite() {
  const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  return (
    <>
      <BreadCrumb items={[{ name: "Избранные" }]} />
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
      <div className="hidden">
        <div className="my-[48px]">
          <h2 className="text-[24px] mb-4 font-semibold">Избранное</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-stretch gap-x-[20px] gap-y-[36px]">
            <Card setIsNumberModalOpen={setIsNumberModalOpen} />
            <Card setIsNumberModalOpen={setIsNumberModalOpen} />
            <Card discount={true} setIsNumberModalOpen={setIsNumberModalOpen} />
            <Card setIsNumberModalOpen={setIsNumberModalOpen} />
            <Card discount={true} setIsNumberModalOpen={setIsNumberModalOpen} />
          </div>
        </div>
      </div>
      <EmptyFavourite />
    </>
  );
}

export default Favourite;
