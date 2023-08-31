import React from "react";
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Main />
      <AboutMe />
      <Projects />
    </>
  );
};

export default App;
