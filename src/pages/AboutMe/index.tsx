import React from "react";

import { Container, Inside, LeftSide, RightSide } from "./styles";
import PageTitle from "../../components/PageTitle";

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
          
        </RightSide>
      </Inside>
    </Container>
  );
};

export default AboutMe;
