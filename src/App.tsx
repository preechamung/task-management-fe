import { Suspense } from 'react';
import tw from 'tailwind-styled-components';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import './App.css';
import { useAppSelector } from './app/hook';
import { selectIsToggle } from './features/sideBarSlice';
// pages
// ***** Project *****
import Project from './pages/project/Project';
import Overview from './pages/project/Overview';
import List from './pages/project/List';
import Boards from './pages/project/Boards';
import Chronology from './pages/project/Chronology';
import Calendar from './pages/project/Calendar';
import Members from './pages/project/Members';
import Channels from './pages/project/Channels';
import Files from './pages/project/Files';

import SideBar from './pages/sideBar/SideBar'
import Login from './pages/login/login';

function App() {
  const isToggle = useAppSelector(selectIsToggle);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/" element={<Proteted />}>
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
      </Route>
    </Routes>
  );
}

function Proteted() {
  const isToggle = useAppSelector(selectIsToggle);

  return (
    <div className='bg-erieblack h-screen overflow-hidden'>
      <SideBar />
      <Container $isToggle={isToggle}>
        <Outlet />
      </Container>
    </div>
  )
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
