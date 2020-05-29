import React, { useRef } from "react";

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
  const { height, width } = useWindowDimensions();

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

  //Atm canvas breaks the site on mobile, so only render if on desktop
  const optionalCanvas =
    width > 1 ? <Canvas height={height} width={width} /> : null;

  return (
    <>
      {optionalCanvas}
      <Window height={height} width={width}>
        <Bio height={height} width={width} scrollComponent={scrollComponent} />
        <About height={height} width={width} aboutRef={aboutRef} />
        <ProjectBox
          scrollToBio={scrollToBio}
          height={height}
          width={width}
          projectsRef={projectsRef}
        />
      </Window>
    </>
  );
}

export default App;
