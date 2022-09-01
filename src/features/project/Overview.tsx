import tw from 'tailwind-styled-components'
import Attachment from '../../components/project/Attachment'
import WorkProgress from '../../components/project/WorkProgress'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillCheckCircle, AiOutlineCheckCircle, AiOutlinePlusCircle, AiOutlineExclamationCircle, AiOutlineFieldTime } from 'react-icons/ai'

const Overview = () => {
    return (
        <Container>
            <ProjectInfo>
                <h1 className='head__text'>
                    Project Info
                </h1>

                {/* Description */}
                <Section>
                    <div className='sub__head__text'>
                        StrataScratch - The Place To Master Coding
                    </div>

                    <p className='normal__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Section>

                {/* Attachment */}
                <Section>
                    <div className='sub__head__text'>
                        Files & Links
                    </div>

                    <Attachment />
                </Section>

                {/* Work Progress */}
                <Section>
                    <div className='sub__head__text'>
                        Work Progress
                    </div>

                    <WorkProgress />
                </Section>
            </ProjectInfo>

            <Responsible>
                <h2 className='head__text text-[16px]'>Responsible</h2>

                <div className='flex h-16 w-full border border-charlestongreen bg-charlestongreen rounded-md px-4 py-2 items-center justify-between'>
                    <div className='flex gap-3'>
                        <img src={"/people02.png"} alt="" className='w-10 h-10' />
                        <div className='flex flex-col'>
                            <span className='normal__14__text font-bold'>
                                Rustam Musaiev
                            </span>
                            <span className='normal__text'>
                                Project Manager
                            </span>
                        </div>
                    </div>

                    <BsThreeDots className='cursor-pointer text-gray' />
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <div className='normal__text text-davysgrey'>Start Date</div>
                        <div className='normal__text text-gray'>13 May 2021</div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='normal__text text-davysgrey'>Estimated End Date</div>
                        <div className='normal__text text-gray'>10 Sep 2022</div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='normal__text text-davysgrey'>Category</div>
                        <div className='normal__text text-gray'>Corporate Website</div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='normal__text text-davysgrey'>Bylling Type</div>
                        <div className='normal__text text-gray'>Fix Price</div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='normal__text text-davysgrey'>Project Status</div>
                        <div className='normal__text text-gray flex items-center gap-1'>
                            <AiFillCheckCircle className='text-maximumgreen' size={18} />
                            <span>According to plan</span>
                        </div>
                    </div>
                </div>

                <hr className='border-0 border-b-2 border-charlestongreen' />

                <Status>
                    <div className='flex justify-between items-center'>
                        <span className='normal__text'>Project progress</span>
                        <span className='bold__14__text'>19%</span>
                    </div>

                    <div className="w-full rounded-full h-2 bg-davysgrey">
                        <div className="bg-toolbox h-2 rounded-full w-[45%]"></div>
                    </div>
                </Status>

                <Status>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <AiOutlinePlusCircle className='text-toolbox' size={25} />
                            <span className='normal__text'>Created tasks</span>
                        </div>

                        <span className='bold__14__text'>32</span>
                    </div>
                </Status>

                <Status>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineCheckCircle className='text-maximumgreen' size={25} />
                            <span className='normal__text'>Completed tasks</span>
                        </div>

                        <span className='bold__14__text'>6</span>
                    </div>
                </Status>

                <Status>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineExclamationCircle className='text-flax' size={25} />
                            <span className='normal__text'>Tasks in progress</span>
                        </div>

                        <span className='bold__14__text'>2</span>
                    </div>
                </Status>

                <Status>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineFieldTime className='text-iceberg' size={25} />
                            <span className='normal__text'>Upcoming taks</span>
                        </div>

                        <span className='bold__14__text'>24</span>
                    </div>
                </Status>
            </Responsible>
        </Container>
    )
}

export default Overview

const Container = tw.div`flex flex-row h-auto`

const ProjectInfo = tw.div`flex flex-col w-3/4 lt-lg:w-3/5 lt-lg:px-10 px-28 py-10 border-r-2 border-charlestongreen gap-6`

const Responsible = tw.div`flex flex-col w-1/4 lt-lg:w-2/5 px-6 py-10 bg-erieblack gap-6`

const Section = tw.div`flex flex-col gap-3`

const Status = tw.div`flex flex-col relative gap-2 h-auto w-full border border-charlestongreen bg-charlestongreen rounded-md p-4 justify-between`