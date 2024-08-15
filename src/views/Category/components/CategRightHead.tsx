import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

const buttonData = [
  "Чехлы",
  "Кабели",
  "Зарядные устройства и кабели",
  "Смартфоны Android",
  "Подставки и держатели",
  "Защитные стекла и пленки",
  "Сетевые зарядные устройства",
];

function CategRightHead() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check on mount
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-mainBlack text-[24px] font-semibold">
            Смартфоны и телефоны
          </h1>
          <span className="text-txtSecondary2 text-[14px]">22,867 товаров</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="font-medium text-txtSecondary2">
            Сначала показывать:
          </span>
          <select className="outline-none cursor-pointer text-mainBlack font-medium">
            <option value="">Популярные</option>
          </select>
        </div>
      </div>
      <div className="relative flex items-center">
        <div
          ref={scrollContainerRef}
          className="flex gap-[8px] overflow-auto categScroll no-scrollbar flex-1"
        >
          {buttonData.map((item, idx) => (
            <button
              key={idx}
              className="p-[10px_12px] flex-shrink-0 rounded-[8px] bg-buttonBg text-mainBlack font-medium"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={handleScrollLeft}
          className={`text-white rounded-full top-[50%] translate-y-[-50%] absolute left-0 w-[32px] aspect-square grid place-content-center bg-mainBlack ${
            isAtStart ? "hidden" : ""
          }`}
          disabled={isAtStart}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleScrollRight}
          className={`text-white rounded-full top-[50%] translate-y-[-50%] absolute right-0 w-[32px] aspect-square grid place-content-center bg-mainBlack ${
            isAtEnd ? "hidden" : ""
          }`}
          disabled={isAtEnd}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default CategRightHead;
