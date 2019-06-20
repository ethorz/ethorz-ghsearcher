import React from 'react';

import styled from '@emotion/styled';
import {colors, fonts} from 'utils/config';

const StyledButton = styled('input')`
    font-family: ${fonts.montserrat};
    width: 100%;
    background: ${colors.night};
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: ${colors.grey};
    font-size: 22px;
    padding: 13px;
    font-weight: 700;
`;

const Button = (props) => (
    <StyledButton
        type="button"
        {...props}
    />
);

export default Button