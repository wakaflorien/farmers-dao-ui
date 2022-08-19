import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";

import Package from './pages/Package';
import Proposal from './components/Proposal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path={"/"} element={<App />}/>
          <Route path={"/Join"} element={<Package />}/>
          <Route path={"/Proposal"} element={<Proposal />}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
