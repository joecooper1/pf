import React from "react";

import { Window } from "./styles/App";

import Bio from "./components/Bio";

import useWindowDimensions from './utils/useWindowDimensions';

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <Window height={height} width={width}>
      <Bio />
    </Window>
  );
}

export default App;
