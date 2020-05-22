import React from "react";

import { Window } from "./styles/App";

import Bio from "./components/Bio";
import ProjectBox from './components/ProjectBox';

import useWindowDimensions from './utils/useWindowDimensions';

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <Window height={height} width={width}>
      <Bio height={height} width={width} />
      <ProjectBox height={height} width={width} />
    </Window>
  );
}

export default App;
