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
          <Project />
        </ProjectsContainer>
      </InsideContainer>
    </Container>
  );
};

export default Projects;
