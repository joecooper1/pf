import styled from "styled-components";

import React from "react";

export const OptionsBar = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: pink;
`;

export const SelectBar = (props) => {
return (
  <select style={{ backgrondColor: "transparent" }}>
    {props.options.map((option) => {
      return <option>{option}</option>;
    })}
  </select>
);
};