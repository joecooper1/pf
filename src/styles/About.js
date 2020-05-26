import styled from "styled-components";

export const View = styled.div`
  max-width: ${(props) => `${props.dimensions.width * 0.95}px`};
  padding: ${(props) => {
    return props.dimensions.width > 1024 ? "30px" : "5px";
  }};
  background-color: black;
  display: flex;
  flex-direction: ${(props) => {
    return props.dimensions.width > 1024 ? "row" : "column";
  }};
  justify-content: flex-start;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 20px;
  color: white;
  margin-left: 5%;
  width: ${(props) => {
    return props.dimensions.width > 1024 ? "50%" : "90%";
  }};
  line-height: 2;
`;

export const Skills = styled.div`
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => {
    return props.dimensions.width > 1024 ? "30%" : "90%";
  }};
  margin-left: ${(props) => {
    return props.dimensions.width > 1024 ? "10%" : "5%";
  }};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallText = styled.p`
  font-size: 20px;
`;

export const LogoBar = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
`;

export const Logo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${(props) => {
    return props.dimensions.width > 1024 ? "20px" : "0px";
  }};
  margin-right: ${(props) => {
    return props.dimensions.width > 1024 ? "20px" : "10px";
  }};
  margin-bottom: 15px;
`;

export const LogoText = styled.p`
  font-size: 15px;
  margin: 0;
`;
