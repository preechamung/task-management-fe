import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components'
// data and model
import { Menu, munuList } from './menu';

const Project = () => {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState('');
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <Container>
            <Header>
                <div className='flex flex-row gap-2 items-center w-fit'>
                    <div className={`bg-[#ff9201] flex justify-center items-center rounded-sm w-[30px] h-[30px] font-bold text-black`}>S</div>
                    <h1 className='head__text'>
                        StrataScratch
                    </h1>
                </div>
            </Header>

            <MenuContainer>
                {
                    munuList.map((menu: Menu, index: number) => (
                        <Link key={index} to={menu.url}>
                            <Item $active={menu.url === url}>
                                {menu.name}
                            </Item>
                        </Link>
                    ))
                }
            </MenuContainer>

            <Content>
                <Outlet />
            </Content>
        </Container >
    )
}

const Container = tw.div`flex flex-col lt-md:w-fit w-full`

const Header = tw.div`flex flex-col justify-between p-5`

const MenuContainer = tw.ul`flex flex-row border-b-2 border-charlestongreen px-5 lt-md:w-fit`

const Item = tw.li`
    text-[14px]
    font-semibold
    cursor-pointer
    text-dimgray
    px-4
    pb-3
    hover:border-b-2
    hover:border-toolbox
    hover:text-brightgray
    ${(p: any) => (p.$active ? 'border-b-2 border-toolbox text-brightgray' : '')}
`

const Content = tw.div`h-[calc(100vh-110px)] overflow-y-auto scrollbar__content`

export default Project