import React from "react";

import { Container } from "./styles";

const Techs: React.FC<{image: string, text: string}> = ({image, text}) => {
  return (
    <Container>
      <img src={image} />
      <p>{text}</p>
    </Container>
  );
};

export default Techs;
