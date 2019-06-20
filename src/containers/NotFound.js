import React from 'react';
import Button from 'components/Button';

import {navigate} from '@reach/router';

import styled from '@emotion/styled';
import {colors, fonts} from 'utils/config';

const Container = styled('div')`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    color: ${colors.night};
    font-size: 50px;
    padding: 1em;
    text-align: center;
    font-family: ${fonts.montserrat}
`;

const ButtonWrapper = styled('div')`
    width: 50%;
    margin: 0 auto;
    margin-top: 1em;
`;

const NotFound = () => (
    <Container>
        <span>
            404 Not found
        </span>
        <ButtonWrapper>
            <Button
                value="Back to main"
                onClick={function () {
                    navigate('/');
                }}
            />
        </ButtonWrapper>
    </Container>
);

export default NotFound