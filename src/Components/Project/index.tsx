import React from 'react';

import { ArrowImg, Container, DateRange, Divider, NameContainer, Tag } from './styles';

import arrowleft from '../../Assets/arrowleft.svg'

interface ProjectsInterface {
    name: string;
    href?: string;
    tag: string; 
    daterange: string;
}

const Project: React.FC<ProjectsInterface> = ({name, href, tag, daterange}) => {
  return (
    <Container>
        <Tag>{tag}</Tag>

        <NameContainer>
            {name}
            <ArrowImg 
                src={arrowleft}
            />
        </NameContainer>

        <Divider />

        <DateRange>{daterange}</DateRange>
    </Container>
  );
};

export default Project;
