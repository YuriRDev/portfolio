import React from 'react';

import { ArrowImg, Container, DateRange, Divider, NameContainer, Tag } from './styles';

import arrowleft from '../../Assets/arrowleft.svg'

const Project: React.FC = () => {
  return (
    <Container>
        <Tag>UI Design</Tag>

        <NameContainer>
            {`Lorem Ypsum dolor sit`}
            <ArrowImg 
                src={arrowleft}
            />
        </NameContainer>

        <Divider />

        <DateRange>March 22, 2022 - April 1, 2022</DateRange>
    </Container>
  );
};

export default Project;
