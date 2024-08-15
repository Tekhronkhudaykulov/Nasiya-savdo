function SubCategLast({ subCateg }: { subCateg: { name: string } }) {
  return (
    <div className="flex justify-between items-center py-[7.5px]  text-[14px] px-[10px] rounded-[6px] gap-3 hover:bg-buttonBg text-txtSecondary2 hover:text-mainBlack cursor-pointer">
      <span>{subCateg.name}</span>
    </div>
  );
}

export default SubCategLast;
