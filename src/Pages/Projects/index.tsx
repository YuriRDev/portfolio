import React from 'react';

import projects from '../../Assets/projects.svg'

import { 
    Container, 
    HalfCircle,
    Header,
    HeaderTitle,
    Icon
 } from './styles';

const Projects: React.FC = () => {
  return (
    <Container>
      <HalfCircle/>
      <Header>
          <HeaderTitle>
              <Icon 
                src={projects}
              />
          </HeaderTitle>
      </Header>
    </Container>
  );
};

export default Projects;
