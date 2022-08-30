
import SideBar from './features/SideBar/SideBar'
import './App.css';
import { useAppSelector } from './app/hook';
import { selectIsToggle } from './features/SideBar/sideBarSlice';
import tw from 'tailwind-styled-components';

function App() {
  const isToggle = useAppSelector(selectIsToggle);

  return (
    <div className='bg-erieblack h-screen'>
      <SideBar />
      <Container $isToggle={isToggle}>
        test
      </Container>
    </div>
  );
}

const Container = tw.div`
  ${(p: any) => (p.$isToggle ? 'ml-[60px]' : 'ml-60')}
  p-5
  bg-raisinblack
  h-screen
  rounded-tl-3xl
  border-t-2
  border-l-2
  border-charlestongreen
  duration-150 ease-in-out
`

export default App;
