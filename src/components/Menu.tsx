import { FunctionComponent } from "react";
type MenuProps = {
    icon: JSX.Element;
    name: string;
};

const Menu: FunctionComponent<MenuProps> = ({ icon, name }) => {
    return (
        <div className='flex flex-row gap-3 p-2 px-5 items-center hover:bg-raisinblack cursor-pointer'>
            <div className="text-dimgray">{icon}</div>
            <span className="text-brightgray text-[14px] font-semibold">{name}</span>
        </div>
    )
}

export default Menu