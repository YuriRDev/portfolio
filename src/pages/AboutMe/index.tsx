import React from "react";

import { Container, Inside, LeftSide, RightSide } from "./styles";
import PageTitle from "../../components/PageTitle";
import Techs from "../../components/Techs";

import css from "../../assets/icons/css.svg";
import html from "../../assets/icons/html.svg";
import js from "../../assets/icons/js.svg";
import ts from "../../assets/icons/ts.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import react from "../../assets/icons/react.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import graphql from "../../assets/icons/graphql.svg";
import aws from "../../assets/icons/aws.svg";
import postgresql from "../../assets/icons/postgresql.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import figma from "../../assets/icons/figma.svg";
import java from "../../assets/icons/java.svg";
import rust from "../../assets/icons/rust.svg";
import c from "../../assets/icons/c.svg";

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Inside>
        <LeftSide>
          <PageTitle text="About me & Stacks that I use" />
          <p>
            Hey there! I'm Yuri, a FullStack developer with 7+ years of
            experience and UI Designer. I've built some systems with highly
            number of active users.
            <br />
            <br />
            I've a trully entusiasm about optimization and clean code.
            Communication and team work are key!
            <br />
            <br />I need to mention, <span>rust</span> is my love language.
          </p>
        </LeftSide>
        <RightSide>
          <Techs image={css} text={"CSS"} />
          <Techs image={html} text={"HTML"} />
          <Techs image={js} text={"Javascript"} />
          <Techs image={rust} text={"Rust"} />
          <Techs image={java} text={"Java"} />
          <Techs image={c} text={"C/C++"} />
          <Techs image={ts} text={"Typescript"} />
          <Techs image={bootstrap} text={"Bootstrap"} />
          <Techs image={react} text={"ReactJS"} />
          <Techs image={nodejs} text={"NodeJS"} />
          <Techs image={graphql} text={"GraphQL"} />
          <Techs image={aws} text={"AWS"} />
          <Techs image={postgresql} text={"PostgreSQL"} />
          <Techs image={mongodb} text={"MongoDB"} />
          <Techs image={figma} text={"Figma"} />
        </RightSide>
      </Inside>
    </Container>
  );
};

export default AboutMe;
