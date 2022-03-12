import React from 'react';
import COLORS from '../../colors';

import testimonial from '../../Assets/testimonial.svg'

import {
    Container,
    Header,
    IconImg,
    Title,
    Subtitle,
    Tag,
    Main
} from './styles';

import Testimonial from '../../Components/Testimonial';

const Testimonials: React.FC = () => {
    return (
        <Container>
            <Header>
                <IconImg
                    src={testimonial}
                />

                <Title>Testimonials</Title>
                <Subtitle>
                    Don't take my word for it... <br /> Look at those! </Subtitle>

                <Tag>
                    {'+20 Projects in the last month!'}
                </Tag>
            </Header>

            <Main>
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </Main>

        </Container>
    );
}

export default Testimonials;