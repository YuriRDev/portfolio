import React from 'react';

import projects from '../../Assets/projects.svg';
import Project from '../../Components/Project';

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
  return (
    <Container>
      <HalfCircle />
      <InsideContainer>
        <div>
          <Header>
            <HeaderTitle>
              <Icon src={projects} />
              Last Projects
            </HeaderTitle>
            Here a few designs/codes that <br /> i've worked on.
          </Header>
        </div>
        <ProjectsContainer>
          <Project
            tag="UI Design"
            name="Lorem Ypsum Dores"
            daterange="March 22, 2022 - April 1, 2022"
          />
          <Project
            tag={`UI Design & Front-end `}
            name="Lorem sit amet"
            daterange="March 22, 2022 - April 1, 2022"
          />
          <Project
            tag="Front-End"
            name="Sit Lorem Creato"
            daterange="March 22, 2022 - April 1, 2022"
          />
        </ProjectsContainer>
      </InsideContainer>
    </Container>
  );
};

export default Projects;
