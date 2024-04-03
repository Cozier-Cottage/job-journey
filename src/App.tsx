import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import ApplicationHistory from './components/ApplicationHistory/ApplicationHistory';
import MainContainer from './containers/MainContainer';
import Profile from './components/Profile/Profile';
import '@mantine/core/styles.css';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<ApplicationHistory />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/" element={< MORE PATH HERE />} /> */}\
      </Route>
    </Routes>
  );
}

export default App;
