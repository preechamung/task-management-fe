import tw from 'tailwind-styled-components';
import {
  Routes,
  Route
} from 'react-router-dom';

import SideBar from './features/SideBar/SideBar'
import './App.css';
import { useAppSelector } from './app/hook';
import { selectIsToggle } from './features/SideBar/sideBarSlice';
// features
// ***** Project
import Project from './features/Project/Project';
import Overview from './features/Project/Overview';
import List from './features/Project/List';
import Boards from './features/Project/Boards';
import Chronology from './features/Project/Chronology';
import Calendar from './features/Project/Calendar';
import Members from './features/Project/Members';
import Channels from './features/Project/Channels';
import Files from './features/Project/Files';

function App() {
  const isToggle = useAppSelector(selectIsToggle);

  return (
    <div className='bg-erieblack h-screen'>
      <SideBar />
      <Container $isToggle={isToggle}>
        <Routes>
          <Route path='/project' element={<Project />}>
            <Route path="overview" element={<Overview />} />
            <Route path="list" element={<List />} />
            <Route path="boards" element={<Boards />} />
            <Route path="chronology" element={<Chronology />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="members" element={<Members />} />
            <Route path="channels" element={<Channels />} />
            <Route path="files" element={<Files />} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

const Container = tw.div`
  ${(p: any) => (p.$isToggle ? 'ml-[60px]' : 'ml-60')}
  bg-raisinblack
  h-screen
  rounded-tl-3xl
  border-t-2
  border-l-2
  border-charlestongreen
  duration-150 ease-in-out
`

export default App;
