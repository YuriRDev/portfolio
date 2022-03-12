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
                
                <Testimonial
                    name={'Joao Silva'}
                    status={'CEO Fintech'}
                    description={'Nullam porttitor condimentum dui malesuada mauris gravida litora amet curabitur eu risus donec commodo facilisis, vivamus potenti aenean tellus ornare vitae rhoncus curabitur fermentum torquent eros quam nibh.'}
                />

                <Testimonial
                    name={'Pedro Duarte'}
                    status={'Senior FrontEnd'}
                    description={'Donec commodo facilisis, vivamus potenti aenean tellus ornare vitae rhoncus curabitur fermentum torquent eros quam nibh.'}
                />

                <Testimonial
                    name={'Pedro cabral'}
                    status={'ABCDEF'}
                    description={'Risus donec commodo facilisis, vivamus potenti aenean tellus ornare vitae rhoncus curabitur fermentum torquent eros quam nibh.'}
                />
                
                <Testimonial
                    name={'Eduardo Rossi'}
                    status={'Manager at fintech'}
                    description={'Nullam porttitor condimentum dui malesuada mauris gravida litora amet curabitur eu risus.'}
                />
                
            </Main>

        </Container>
    );
}

export default Testimonials;