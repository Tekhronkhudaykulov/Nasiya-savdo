interface Props {
  placeHolder?: string;
  value?: string;
  className?: string;
}
function InputBasketForm({ placeHolder, value, className }: Props) {
  return (
    <input
      placeholder={placeHolder || ""}
      className={`placeholder:text-txtSecondary ${
        className || "text-txtSecondary text-[16px]"
      } h-[48px] border border-line px-4 rounded-[8px] outline-none`}
      type="text"
      defaultValue={value || ""}
    />
  );
}

export default InputBasketForm;
