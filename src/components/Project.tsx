import { FunctionComponent } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useAppSelector } from '../app/hook';
import { selectIsToggle } from '../features/SideBar/sideBarSlice';

type ProjectProps = {
    imgIcon: string;
    color: string;
    name: string;
};

const Project: FunctionComponent<ProjectProps> = ({ imgIcon, color, name }) => {
    const isToggle = useAppSelector(selectIsToggle);
    return (
        <div className='flex flex-row p-2 px-5 items-center justify-between cursor-pointer hover:bg-raisinblack text-transparent hover:text-dimgray'>
            <div className="flex flex-row gap-3 items-center">
                {
                    imgIcon ?
                        <img className="w-[16px] h-[16px]" src={imgIcon} alt="" /> :
                        <div className={`bg-[${color}] flex justify-center items-center rounded-sm w-[16px] h-[16px] font-bold text-black`}>{name.charAt(0).toLocaleUpperCase()}</div>
                }
                <span className={`${isToggle && 'hidden'} text-brightgray text-[14px] font-semibold`}>{name}</span>
            </div>

            <BiDotsHorizontalRounded className={`${isToggle && 'hidden'} z-10`} size={20} />
        </div>
    )
}

export default Project