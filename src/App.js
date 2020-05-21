import React from "react";

import { Window } from "./styles/App";

import Header from "./components/Header";

import useWindowDimensions from './utils/useWindowDimensions';

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <Window height={height}>
      <Header />
    </Window>
  );
}

export default App;
