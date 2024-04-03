import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Application from './components/Application/Application';
import MainContainer from './containers/MainContainer';
import '@mantine/core/styles.css'

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/application" element={<Application />} />
        {/* <Route path="/" element={< MORE PATH HERE />} /> */}\
      </Route>
    </Routes>
  );
}

export default App
