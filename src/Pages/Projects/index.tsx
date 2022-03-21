import React from 'react';

import projects from '../../Assets/projects.svg';
import Project from '../../Components/Project';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import {
  Container,
  HalfCircle,
  Header,
  HeaderTitle,
  Icon,
  InsideContainer,
  ProjectsContainer,
} from './styles';

const Projects: React.FC = () => {
  const titleAnimation = useAnimation();
  const descriptionAnimation = useAnimation();

  titleAnimation.start({
    y: 0,
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.3 },
  });

  descriptionAnimation.start({
    y: 0,
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.4, delay: 0.3 },
  });

  return (
    <Container>
      <HalfCircle />
      <InsideContainer>
        <div>
          <Header>
            <motion.div
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={titleAnimation}
            >
              <HeaderTitle>
                <Icon src={projects} />
                Last Projects
              </HeaderTitle>
            </motion.div>
            <motion.div
              initial={{
                y: -15,
                opacity: 0,
              }}
              animate={descriptionAnimation}
            >
              Here a few designs/codes that <br /> i've worked on.
            </motion.div>
          </Header>
        </div>
        <ProjectsContainer>
          <Project
            tag={'UI Design & Front-End'}
            name="STUFF ."
            daterange="Feb 23, 2022 - March 6, 2022"
            initial={{
              x: 70,
              opacity: 0,
            }}
          />
          <Project
            tag={`UI Design & Front-end `}
            name="Solar Vacation"
            daterange="1 Hour challenge - Speed Code"
            initial={{
              x: -70,
              opacity: 0,
            }}
          />
          <Project
            tag="Front-End"
            name="Instagram UI Clone"
            daterange="Jab 10, 2022 - Jan 11 - 24 Hours challenge "
            initial={{
              x: 70,
              opacity: 0,
            }}
          />
        </ProjectsContainer>
      </InsideContainer>
    </Container>
  );
};

export default Projects;
