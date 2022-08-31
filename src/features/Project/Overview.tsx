import tw from 'tailwind-styled-components'
import { AiFillCheckCircle, AiFillPlusCircle } from 'react-icons/ai'
import { GiCircle } from 'react-icons/gi'
import { CgArrowsScrollV } from 'react-icons/cg'

const Overview = () => {
    return (
        <Container>
            <ProjectInfo>
                <h1 className='head__text'>
                    Project Info
                </h1>

                <Section>
                    <div className='sub__head__text'>
                        StrataScratch - The Place To Master Coding
                    </div>

                    <p className='normal__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Section>

                <Section>
                    <div className='sub__head__text'>
                        Files & Links
                    </div>

                    <div>

                    </div>
                </Section>

                {/* Work Progress */}
                <Section>
                    <div className='sub__head__text mb-2'>
                        Work Progress
                    </div>

                    <div className='flex flex-col gap-8'>
                        {/* Work */}
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
                                            <CgArrowsScrollV className='border rounded-full text-toolbox font-bold cursor-pointer' size={20} />
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

                        {/* Work */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-3 min-h-[40px]'>
                                <div className='flex flex-col items-center gap-1'>
                                    <div>
                                        <GiCircle className='text-maximumgreen cursor-pointer' size={25} />
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

                            <div className='flex flex-row gap-3 min-h-[40px]'>
                                <div className='flex flex-col items-center gap-1'>
                                    <div>
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
                        </div>
                    </div>
                </Section>
            </ProjectInfo>

            <div className='w-1/4 px-10 py-10'>
                Project Info
            </div>
        </Container>
    )
}

export default Overview

const Container = tw.div`flex flex-row h-auto`

const ProjectInfo = tw.div`flex flex-col w-3/4 px-28 py-10 border-r-2 border-charlestongreen gap-6`

const Section = tw.div`flex flex-col gap-2`