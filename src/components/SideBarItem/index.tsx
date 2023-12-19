import { SideBarItemProps } from "./types";

function SideBarItem({ icon, name, onClick }: SideBarItemProps) {
  return (
    <div
      onClick={onClick}
      className="group/item flex w-full flex-row p-4  gap-4 items-center justify-start rounded-md
      font-sans font-medium tracking-wide capitalize text-primary
    cursor-pointer hover:bg-first focus:bg-first"
    >
      {/* icon */}
      <div className="w-1/12 fill-secondary group-focus/item:fill-last group-hover/item:fill-last">
        {icon}
      </div>
      <div className="text-sm text-primary group-focus/item:text-last group-hover/item:text-last">
        {name}
      </div>
    </div>
  );
}

export default SideBarItem;
