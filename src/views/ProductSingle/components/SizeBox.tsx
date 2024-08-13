interface Props {
  text?: string;
}
function SizeBox({ text }: Props) {
  return (
    <div className="border-[1.5px] cursor-pointer text-gray border-line p-[8px_12px] rounded-[8px]">
      <span>{text}</span>
    </div>
  );
}

export default SizeBox;
