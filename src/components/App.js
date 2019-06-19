import React from 'react';
import {Router} from '@reach/router';
import {StateProvider} from 'utils/store';

import Header from 'components/Header';

import Main from 'containers/Main';
import Details from 'containers/Details';

import styled from '@emotion/styled';

const Content = styled('div')`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
`;

const InnerContent = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    padding: 2em;
`;

const App = () => {
    const initialState = {};

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setRepo':
                return {
                    ...state,
                    repository: action.payload
                };
            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Header/>
            <Content>
                <InnerContent>
                    <Router>
                        <Main path="/">
                            <Details path="details/:id"/>
                        </Main>
                    </Router>
                </InnerContent>
            </Content>
        </StateProvider>
    );
};

export default App