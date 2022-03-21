import React from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import {
  ArrowImg,
  Container,
  DateRange,
  Divider,
  NameContainer,
  Tag,
} from './styles';

import arrowleft from '../../Assets/arrowleft.svg';

interface ProjectsInterface {
  name: string;
  href?: string;
  tag: string;
  daterange: string;
  initial?: object;
}

const Project: React.FC<ProjectsInterface> = ({
  name,
  href,
  tag,
  daterange,
  initial,
}) => {
  const containerAnimation = useAnimation();

  containerAnimation.start({
    x: 0,
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.5, delay: 0.8 },
  });

  return (
    <motion.div animate={containerAnimation} initial={initial}>
      <Container>
        <Tag>{tag}</Tag>

        <NameContainer>
          {name}
          <ArrowImg src={arrowleft} />
        </NameContainer>

        <Divider />

        <DateRange>{daterange}</DateRange>
      </Container>
    </motion.div>
  );
};

export default Project;
