import React from 'react';

import testimonial from '../../Assets/testimonial.svg';
import { motion, useAnimation } from 'framer-motion';

import {
  Container,
  Header,
  IconImg,
  Title,
  Subtitle,
  Tag,
  Main,
} from './styles';

import Testimonial from '../../Components/Testimonial';

const Testimonials: React.FC = () => {
  const titleAnimation = useAnimation();
  const descriptionAnimation = useAnimation();
  const tagAnimation = useAnimation();

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

  tagAnimation.start({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.4, delay: 0.7 },
  });

  return (
    <Container>
      <Header>
        <IconImg src={testimonial} />
        <motion.div
          initial={{
            y: 10,
            opacity: 0,
          }}
          animate={titleAnimation}
        >
          <Title>Testimonials</Title>
        </motion.div>
        <motion.div
          initial={{
            y: -10,
            opacity: 0,
          }}
          animate={descriptionAnimation}
        >
          <Subtitle>
            Don't take my word for it... <br /> Look at those!{' '}
          </Subtitle>
        </motion.div>
        <motion.div
          initial={{
            x: -10,
            opacity: 0,
          }}
          animate={tagAnimation}
        >
          <Tag>{'+20 Projects in the last month!'}</Tag>
        </motion.div>
      </Header>

      <Main>
        <Testimonial
          name={'Joao Silva'}
          status={'CEO Fintech'}
          description={
            'Nullam porttitor condimentum dui malesuada mauris gravida litora amet curabitur eu risus donec commodo facilisis, vivamus potenti aenean tellus ornare vitae rhoncus curabitur fermentum torquent eros quam nibh.'
          }
        />

        <Testimonial
          name={'Pedro Duarte'}
          status={'Senior FrontEnd'}
          description={
            'Donec commodo facilisis, vivamus potenti aenean tellus ornare vitae rhoncus curabitur fermentum torquent eros quam nibh.'
          }
        />

        <Testimonial
          name={'Pedro cabral'}
          status={'ABCDEF'}
          description={
            'Risus donec commodo facilisis, vivamus potenti aenean tellus ornare vitae rhoncus curabitur fermentum torquent eros quam nibh.'
          }
        />

        <Testimonial
          name={'Eduardo Rossi'}
          status={'Manager at fintech'}
          description={
            'Nullam porttitor condimentum dui malesuada mauris gravida litora amet curabitur eu risus.'
          }
        />
      </Main>
    </Container>
  );
};

export default Testimonials;
