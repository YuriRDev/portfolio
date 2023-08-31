import React from "react";

import { Container, Inside } from "./styles";
import PageTitle from "../../components/PageTitle";

const Projects: React.FC = () => {
  return (
    <Container>
      <Inside>
        <PageTitle text={"Hand-picked projects for you to see."} />
      </Inside>
    </Container>
  );
};

export default Projects;
