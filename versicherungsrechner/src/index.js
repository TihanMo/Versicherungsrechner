import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './components/AboutUs';
import Layout from './components/Layout';
import Contact from './components/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="home" element={<App />} />
            <Route path="contact" element={<Contact/>} />
            <Route path="about_us" element={<AboutUs />}/>
          </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
