import { FunctionComponent } from "react";
import { useAppSelector } from "../app/hook";
import { selectIsToggle } from "../features/sideBarSlice";
type MenuProps = {
    icon: JSX.Element;
    name: string;
};

const Menu: FunctionComponent<MenuProps> = ({ icon, name }) => {
    const isToggle = useAppSelector(selectIsToggle);
    return (
        <div className='flex flex-row gap-3 p-2 px-5 items-center hover:bg-raisinblack cursor-pointer min-h-[37px]'>
            <div className="text-dimgray">{icon}</div>
            <span className={`${isToggle && 'hidden'} text-brightgray text-[14px] font-semibold font-base`}>{name}</span>
        </div>
    )
}

export default Menu