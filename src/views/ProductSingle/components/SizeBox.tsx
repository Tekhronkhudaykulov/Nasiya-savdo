interface SizeBoxProps {
  text: string;
  active: boolean;
  onClick: () => void;
}
function SizeBox({ text, active, onClick }: SizeBoxProps) {
  return (
    <div
      onClick={onClick}
      className={`border-[1.5px] cursor-pointer ${
        active ? "text-darkGreen border-darkGreen" : "text-gray-500 border-line"
      } p-[8px_12px] rounded-[8px] select-none`}
    >
      <span>{text}</span>
    </div>
  );
}

export default SizeBox;
