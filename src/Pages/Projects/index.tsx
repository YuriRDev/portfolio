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
            tag={'UI Design & Front-End'}
            name="STUFF ."
            daterange="Feb 23, 2022 - March 6, 2022"
          />
          <Project
            tag={`UI Design & Front-end `}
            name="Solar Vacation"
            daterange="1 Hour challenge - Speed Code"
          />
          <Project
            tag="Front-End"
            name="Instagram UI Clone"
            daterange="Jab 10, 2022 - Jan 11 - 24 Hours challenge "
          />
        </ProjectsContainer>
      </InsideContainer>
    </Container>
  );
};

export default Projects;
