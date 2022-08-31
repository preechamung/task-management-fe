import React, { Suspense } from 'react';
import tw from 'tailwind-styled-components';
import {
  Routes,
  Route,
  Navigate,
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

// const Project = React.lazy(() => import('./features/Project/Project'));
// const Overview = React.lazy(() => import('./features/Project/Overview'));
// const List = React.lazy(() => import('./features/Project/List'));
// const Boards = React.lazy(() => import('./features/Project/Boards'));
// const Chronology = React.lazy(() => import('./features/Project/Chronology'));
// const Calendar = React.lazy(() => import('./features/Project/Calendar'));
// const Members = React.lazy(() => import('./features/Project/Members'));
// const Channels = React.lazy(() => import('./features/Project/Channels'));
// const Files = React.lazy(() => import('./features/Project/Files'));

function App() {
  const isToggle = useAppSelector(selectIsToggle);

  return (
    <div className='bg-erieblack h-screen overflow-hidden'>
      <SideBar />
      <Container $isToggle={isToggle}>
        <Suspense>
          <Routes>
            {/* project group */}
            <Route path='/project' element={<Project />}>
              <Route path='' element={<Navigate to='overview' />} />
              <Route path='overview' element={<Overview />} />
              <Route path='list' element={<List />} />
              <Route path='boards' element={<Boards />} />
              <Route path='chronology' element={<Chronology />} />
              <Route path='calendar' element={<Calendar />} />
              <Route path='members' element={<Members />} />
              <Route path='channels' element={<Channels />} />
              <Route path='files' element={<Files />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

const Container = tw.div`
  overflow-x-auto
  overflow-y-hidden
  ${(p: any) => (p.$isToggle ? 'ml-[60px]' : 'ml-60')}
  bg-raisinblack
  h-full
  rounded-tl-3xl
  border-t-2
  border-l-2
  border-charlestongreen
  duration-150 ease-in-out
`

export default App;
