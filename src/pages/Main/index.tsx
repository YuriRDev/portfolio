import React from "react";
import { motion } from "framer-motion";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <h1>
        I'm <span>Yuri Rousseff</span>. <br />
        UI Designer & Fullstack dev
      </h1>
    </Container>
  );
};

export default Main;
