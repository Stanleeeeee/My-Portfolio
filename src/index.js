import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Intro from './components/contents/pages/Intro';
import AboutMe from './components/contents/pages/AboutMe';
import Skills from './components/contents/pages/skills/Skills';
import ContactMe from './components/contents/pages/Contact';
import Projects from './components/contents/pages/project/Projects';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Intro />} />
        <Route path="intro" element={<Intro />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
