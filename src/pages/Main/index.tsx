import React from "react";
import { motion } from "framer-motion";

import { Container, Inside, TextArea } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Inside>
        <TextArea>
          <motion.h3
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hey I'm
          </motion.h3>

          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Lorem Ypsum
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            UI Designer & FullStack dev
          </motion.p>
        </TextArea>
      </Inside>
    </Container>
  );
};

export default Main;
