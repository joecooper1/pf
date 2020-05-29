import React, { useRef, useState, useEffect } from "react";

import { Window } from "./styles/App";

import Bio from "./components/Bio";
import ProjectBox from "./components/ProjectBox";
import Canvas from "./components/Canvas";
import About from "./components/About";

import useWindowDimensions from "./utils/useWindowDimensions";

import scrollToComponent from "react-scroll-to-component";

//Scroll to element function
const scrollToBio = () => window.scrollTo(0, 0);

function App() {
  const [winHeight, setWinHeight] = useState(null);
  const [winWidth, setWinWidth] = useState(null);
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (!winHeight && !winWidth) {
      setWinHeight(height);
      setWinWidth(width);
    }
  });

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  //Scroll to component
  const scrollComponent = (ref) => {
    if (ref === "about") {
      scrollToComponent(aboutRef.current, { align: "top", duration: 1 });
    } else if (ref === "projects") {
      scrollToComponent(projectsRef.current, { align: "top", duration: 1 });
    }
  };

  return (
    <>
      <Canvas height={winHeight} width={winWidth} />
      <Window height={winHeight} width={winWidth}>
        <Bio
          height={winHeight}
          width={winWidth}
          scrollComponent={scrollComponent}
        />
        <About height={winHeight} width={winWidth} aboutRef={aboutRef} />
        <ProjectBox
          scrollToBio={scrollToBio}
          height={winHeight}
          width={winWidth}
          projectsRef={projectsRef}
        />
      </Window>
    </>
  );
}

export default App;
