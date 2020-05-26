import React from "react";

import {
  View,
  Text,
  Skills,
  Section,
  SmallText,
  LogoBar,
  Logo,
  LogoText,
} from "../styles/About";

import {
  FaJsSquare,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJava,
} from "react-icons/fa";

export default function About(props) {
  return (
    <View dimensions={props}>
      <Text>
        I've been using code - terrible, convoluted, wildly inefficient code -
        in my artistic projects for years, to create interactive performances
        and small games for commissions. In 2019 I decided to make the leap into
        becoming a software developer full time, and took a three-month training
        course at Northcoders, in Manchester. I came out with a new
        understanding of what programming was, the ability to do with five lines
        of code what I used to be able to do with five hundred, and new
        ambitions as to what I could achieve with my new skills. Now I'm looking
        for opportunities to put those skills and my creativity to work in the
        world of software.
      </Text>
      <Skills>
        <Section>
          <SmallText>What I'm best at</SmallText>
          <LogoBar>
            <Logo>
              <FaJsSquare size={60} />
              <LogoText>JavaScript</LogoText>
              <LogoText>NodeJS</LogoText>
            </Logo>
            <Logo>
              <FaReact size={60} />
              <LogoText>React</LogoText>
              <LogoText>+ Native</LogoText>
            </Logo>
            <Logo>
              <FaHtml5 size={60} />
              <LogoText>HTML5</LogoText>
            </Logo>
            <Logo>
              <FaCss3Alt size={60} />
              <LogoText>CSS3</LogoText>
            </Logo>
          </LogoBar>
        </Section>
        <Section>
          <SmallText>What I'm good at</SmallText>
          <LogoBar>
            <Logo>
              <FaJava size={60} />
              <LogoText>Java</LogoText>
            </Logo>
            <Logo>
              <LogoText>PostgreSQL</LogoText>
              <LogoText>Axios</LogoText>
              <LogoText>Express</LogoText>
              <LogoText>Knex</LogoText>
            </Logo>
            <Logo>
              <LogoText>Mocha</LogoText>
              <LogoText>Chai</LogoText>
              <LogoText>Supertest</LogoText>
              <LogoText>Jest</LogoText>
            </Logo>
          </LogoBar>
        </Section>
        <Section>
          <SmallText>What I'm learning</SmallText>
          <LogoBar>
            <Logo>
              <LogoText>Python</LogoText>
            </Logo>
            <Logo>
              <LogoText>Android Studio</LogoText>
            </Logo>
            <Logo>
              <LogoText>Ruby on Rails</LogoText>
            </Logo>
          </LogoBar>
        </Section>
      </Skills>
    </View>
  );
}
