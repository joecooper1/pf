import React from "react";

import { Window } from "./styles/App";

import Bio from "./components/Bio";
import ProjectBox from "./components/ProjectBox";

import useWindowDimensions from "./utils/useWindowDimensions";

//Scroll to element function
const scrollToBio = () => window.scrollTo(0, 0);

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <Window height={height} width={width}>
      <Bio height={height} width={width} />
      <ProjectBox scrollToBio={scrollToBio} height={height} width={width} />
    </Window>
  );
}

export default App;
