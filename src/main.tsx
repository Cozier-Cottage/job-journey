import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import './index.scss';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <MantineProvider defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </HashRouter>
  </React.StrictMode>,
);
