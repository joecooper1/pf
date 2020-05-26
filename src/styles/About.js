import styled from "styled-components";

export const View = styled.div`
  width: 100%;
  padding: 30px;
  background-color: black;
  display: flex;
  flex-direction: ${(props) => {
    return props.dimensions.width > 1024 ? "row" : "column";
  }};
  justify-content: flex-start;
`;

export const Text = styled.p`
  font-size: 20px;
  color: white;
  margin-left: 5%;
  width: 50%;
  line-height: 2;
`;

export const Skills = styled.div`
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  margin-left: 10%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallText = styled.text`
  font-size: 20px;
`;

export const LogoBar = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
`;

export const Logo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const LogoText = styled.p`
  font-size: 15px;
  margin: 0;
`;
