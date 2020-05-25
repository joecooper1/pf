import React, { useRef } from "react";

import { Window } from "./styles/App";

import Bio from "./components/Bio";
import ProjectBox from "./components/ProjectBox";

import useWindowDimensions from "./utils/useWindowDimensions";

//Scroll to element function
const scrollToRef = (ref) => window.scrollTo(0, 0);

function App() {
  const { height, width } = useWindowDimensions();

  const bio = useRef(null);
  const scrollToBio = () => scrollToRef(bio);

  return (
    <Window height={height} width={width}>
      <Bio ref={bio} height={height} width={width} />
      <ProjectBox scrollToBio={scrollToBio} height={height} width={width} />
    </Window>
  );
}

export default App;
