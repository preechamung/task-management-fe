import { AiFillCheckCircle, AiFillPlusCircle } from 'react-icons/ai'
import { HiSelector } from 'react-icons/hi'

const WorkProgress = () => {
    return (
        <div className='flex flex-col gap-8'>
            {/* Work */}
            <Work />
        </div>
    )
}

export default WorkProgress

const Work = () => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex flex-row gap-3 min-h-[40px]'>
                <div className='flex flex-col items-center gap-1'>
                    <div >
                        <AiFillCheckCircle className='text-maximumgreen cursor-pointer' size={25} />
                    </div>
                    <div className='border-r-2 border-charlestongreen h-full'></div>
                </div>
                <div className='flex flex-col mt-[2px]'>
                    <div className='sub__head__text'>
                        Project Preparation
                    </div>
                </div>
            </div>

            {/* action */}
            <div className='flex flex-row gap-3 min-h-[40px]'>
                <div className='flex flex-col items-center gap-1'>
                    <div>
                        <AiFillPlusCircle className='text-dimgray' size={25} />
                    </div>
                    <div className='border-r-2 border-charlestongreen h-full'></div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <img src={"/people02.png"} alt="" className='w-[25px] h-[25px] rounded-full' />
                        <div>
                            <span className='normal__14__text'>
                                Rustam Musaiev
                            </span>
                            <span className='normal__text p-2'>
                                created a task
                            </span>
                            <span className='normal__14__text'>
                                StrataScratch - Requirement Collection
                            </span>

                            <span className='normal__text p-2'>
                                2 weeks ago
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-row py-6 gap-3'>
                        <div className='relative'>
                            <div className='absolute line__curve border-2 border-charlestongreen h-[15px] w-[20px] top-[-3px] left-[-25px] border-t-0 border-r-0' />
                            <HiSelector className='border rounded-xl text-toolbox font-bold p-[2px] cursor-pointer' size={20} />
                        </div>

                        <span className='normal__14__text text-toolbox font-bold'>
                            Show 12 related tasks
                        </span>

                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-3 min-h-[40px]'>
                <div className='flex flex-col items-center gap-1'>
                    <div>
                        <AiFillPlusCircle className='text-dimgray' size={25} />
                    </div>
                    <div className='border-r-2 border-charlestongreen h-full'></div>
                </div>

                <div className='flex gap-2'>
                    <img src={"/people02.png"} alt="" className='w-[25px] h-[25px] rounded-full' />
                    <div>
                        <span className='normal__14__text'>
                            Rustam Musaiev
                        </span>
                        <span className='normal__text p-2'>
                            created a task
                        </span>
                        <span className='normal__14__text'>
                            StrataScratch - Home Page Prototype
                        </span>

                        <span className='normal__text p-2'>
                            1 weeks ago
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-3 min-h-[40px]'>
                <div className='flex flex-col items-center gap-1'>
                    <div>
                        <AiFillPlusCircle className='text-dimgray' size={25} />
                    </div>
                    {/* <div className='border-r-2 border-charlestongreen h-full'></div> */}
                </div>

                <div className='flex gap-2'>
                    <img src={"/people02.png"} alt="" className='w-[25px] h-[25px] rounded-full' />
                    <div>
                        <span className='normal__14__text'>
                            Rustam Musaiev
                        </span>
                        <span className='normal__text p-2'>
                            created a task
                        </span>
                        <span className='normal__14__text'>
                            StrataScratch - Prototype Of All Pages
                        </span>

                        <span className='normal__text p-2'>
                            1 weeks ago
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}