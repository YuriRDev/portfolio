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

const Testimonial: React.FC = () => {
    return (
        <Container>
            <Text>
                Nullam porttitor condimentum dui malesuada mauris gravida litora amet curabitur eu risus donec commodo facilisis, vivamus potenti aenean tellus ornare vitae rhoncus curabitur fermentum torquent eros quam nibh.
            </Text>

            <PersonContainer>
                <PersonImg />
                <PersonData>
                    <PersonName>
                        Joao silva pedro
                    </PersonName>
                    <PersonStatus>
                        CEO Fintech
                    </PersonStatus>
                </PersonData>
            </PersonContainer>

        </Container>
    );
}

export default Testimonial;