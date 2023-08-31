import React from "react";

import { Container } from "./styles";

const PageTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Container>
      <div />
      <h1>{text}</h1>
    </Container>
  );
};

export default PageTitle;
