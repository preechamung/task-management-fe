import { useState } from 'react'
import tw from 'tailwind-styled-components'
// icons
import { CgMenuRight } from 'react-icons/cg'
import { FiHome } from 'react-icons/fi'
import { BiBarChart, BiChevronUp, BiChevronDown } from 'react-icons/bi'
import { FiLayers, FiCheckSquare } from 'react-icons/fi'
import { TbUsers } from 'react-icons/tb'
import { VscSettings } from 'react-icons/vsc'
import { GiTargeting } from 'react-icons/gi'
import { CgMathPlus } from 'react-icons/cg'
// components
import Menu from '../components/Menu'
import Project from '../components/Project'

const SideBar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [expandedFavorite, setExpandedFavorite] = useState(false)
    const [expandedProjects, setExpandedProjects] = useState(false)
    const [expandedShowAll, setExpandedShowAll] = useState(false)
    const [expandedChannels, setExpandedChannels] = useState(false)

    return (
        <Container $toggleMenu={toggleMenu}>
            <Header>
                <h1 className='headtext'>
                    brandux
                </h1>

                <CgMenuRight className='text-brightgray cursor-pointer' size={20} onClick={() => setToggleMenu(!toggleMenu)} />
            </Header>

            <MenuSection>
                <Menu icon={<FiHome />} name={'Home'} />
                <Menu icon={<BiBarChart />} name={'Dashboard'} />
                <Menu icon={<FiLayers />} name={'Projects'} />
                <Menu icon={<FiCheckSquare />} name={'My Tasks'} />
                <Menu icon={<TbUsers />} name={'Members'} />
                <Menu icon={<GiTargeting />} name={'Goals'} />
                <Menu icon={<VscSettings />} name={'Settings'} />
            </MenuSection>

            <SectionContainer $expanded={expandedFavorite}>
                <Section>
                    <SectionHead>
                        Favorite
                    </SectionHead>

                    {
                        expandedFavorite ?
                            <BiChevronUp
                                className='cursor-pointer'
                                size={20}
                                onClick={() => setExpandedFavorite(!expandedFavorite)}
                            /> :
                            <BiChevronDown
                                className='cursor-pointer'
                                size={20}
                                onClick={() => setExpandedFavorite(!expandedFavorite)}
                            />
                    }
                </Section>

                {/* favorite project */}
                {
                    expandedFavorite &&
                    <>
                        <Project imgIcon={'/teamwork.png'} color={''} name={'StrataScratch'} />
                        <Project imgIcon={''} color={'#ffab41'} name={'AlerSec'} />
                    </>
                }

            </SectionContainer>

            <SectionContainer $expanded={expandedProjects}>
                <Section>
                    <SectionHead>
                        Projects
                    </SectionHead>

                    <div className='flex flex-row items-center gap-1'>
                        <CgMathPlus className='cursor-pointer' />
                        {
                            expandedProjects ?
                                <BiChevronUp
                                    className='cursor-pointer'
                                    size={20}
                                    onClick={() => setExpandedProjects(!expandedProjects)}
                                /> :
                                <BiChevronDown
                                    className='cursor-pointer'
                                    size={20}
                                    onClick={() => setExpandedProjects(!expandedProjects)}
                                />
                        }
                    </div>
                </Section>

                {/* projects */}
                {
                    expandedProjects &&
                    <>
                        <Project imgIcon={'/teamwork.png'} color={''} name={'StrataScratch'} />
                        <Project imgIcon={''} color={'#ffab41'} name={'AlerSec'} />

                        <div className='flex flex-row gap-2 text-dimgray px-5 mt-3 items-center'>
                            <p className='text-[11px] font-semibold'>
                                {!expandedShowAll ? `Show All Projects` : `Show Less`}
                            </p>

                            {
                                expandedShowAll ?
                                    <BiChevronUp
                                        className='cursor-pointer'
                                        size={15}
                                        onClick={() => setExpandedShowAll(!expandedShowAll)}
                                    /> :
                                    <BiChevronDown
                                        className='cursor-pointer'
                                        size={15}
                                        onClick={() => setExpandedShowAll(!expandedShowAll)}
                                    />
                            }
                        </div>
                    </>
                }
            </SectionContainer>

            {/* channels */}
            <SectionContainer>
                <Section>
                    <SectionHead>
                        Channels
                    </SectionHead>

                    <div className='flex flex-row items-center gap-1'>
                        <CgMathPlus className='cursor-pointer' />
                        {
                            expandedChannels ?
                                <BiChevronUp
                                    className='cursor-pointer'
                                    size={20}
                                    onClick={() => setExpandedChannels(!expandedChannels)}
                                /> :
                                <BiChevronDown
                                    className='cursor-pointer'
                                    size={20}
                                    onClick={() => setExpandedChannels(!expandedChannels)}
                                />
                        }
                    </div>
                </Section>
            </SectionContainer>
        </Container>
    )
}

export default SideBar

const Container = tw.div`
    flex
    flex-col
    ${(p: any) => (p.$toggleMenu ? 'w-30' : 'w-60')}
    h-screen
    absolute
    divide-charlestongreen
    divide-y
    divide-y-reverse
    overflow-auto
`

const Header = tw.div`flex flex-row justify-between items-center p-5`

const MenuSection = tw.div`flex flex-col pb-5`

const SectionContainer = tw.div`flex flex-col ${(p: any) => (p.$expanded ? 'pb-5' : '')}`

const Section = tw.div`flex flex-row justify-between items-center p-5 text-dimgray`

const SectionHead = tw.p`text-[14px] font-semibold`
