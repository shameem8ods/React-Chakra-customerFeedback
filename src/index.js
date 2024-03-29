import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import SuccessfullPage from './SuccessfullPage';
import ErrorPage from './ErrorPage';
import {
     BrowserRouter,
     Routes,
     Route,
   } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <ChakraProvider>
          <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
     <Route path="/successful" element={<SuccessfullPage />} />
     <Route path="/error" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
     </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
