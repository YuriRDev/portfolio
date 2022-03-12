import React from 'react';

import {
    Container,
    Text,
    PersonContainer,
    PersonImg,
    PersonData,
    PersonName,
    PersonStatus
} from './styles';

interface TestimonialInterface {
    description: string;
    name: string;
    status: string;
}

const Testimonial: React.FC<TestimonialInterface> = ({description, name, status}) => {
    return (
        <Container>
            <Text>{description}</Text>

            <PersonContainer>
                <PersonImg />
                <PersonData>
                    <PersonName>{name}</PersonName>
                    <PersonStatus>{status}</PersonStatus>
                </PersonData>
            </PersonContainer>

        </Container>
    );
}

export default Testimonial;