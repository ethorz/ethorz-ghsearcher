import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '@reach/router';

import styled from '@emotion/styled';
import {colors} from 'utils/config';

const Container = styled('header')`
    background-color: ${colors.night};
    padding: 2rem;
    flex-grow: 0;
`;

const Content = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Icon = styled(Link)`
    width: 0; 
    height: 0; 
    cursor: pointer;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent; 
  
    border-right: 20px solid ${colors.grey}; 
`;

const Title = styled('h1')`
    flex: 1;
    font-size: 20px;
    color: ${colors.grey};
    text-align: center;
`;

const Header = (props) => {
    const {profile, repo} = props.location.query;

    let ContentComponents = <Content>
        <Title>
            Github repositories searcher
        </Title>
    </Content>;

    if (profile && repo) {
        ContentComponents = <Content>
            <Icon
                to="/"
            />
            <Title>
                {profile}/{repo}
            </Title>
        </Content>;
    }

    return (
        <Container>
            {ContentComponents}
        </Container>
    )
};

Header.propTypes = {
    location: PropTypes.object
};

export default Header