import React from 'react';

import styled from '@emotion/styled';
import {colors, fonts} from 'utils/config';

const StyledInput = styled('input')`
    color: ${colors.night};
    font-family: ${fonts.helvetica};
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid ${colors.night};
    padding: 13px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
`;

const Input = (props) => (
    <StyledInput
        {...props}
    />
);

Input.defaultProps = {
    type: 'text'
};

export default Input