interface Props {
  color?: string;
}
function ColorBox({ color }: Props) {
  console.log(color);

  return (
    <div className="w-[46px] aspect-square cursor-pointer border-[1.5px] p-[2px] border-line rounded-[10px]">
      <div className={`${color} w-full h-full rounded-[8px]`}></div>
    </div>
  );
}

export default ColorBox;
