interface Props {
  className?: string;
  text?: string;
}
function LabelBasketForm({ className, text }: Props) {
  return (
    <label className={`${className} text-[14px] text-txtSecondary`} htmlFor="">
      {text}
    </label>
  );
}

export default LabelBasketForm;
