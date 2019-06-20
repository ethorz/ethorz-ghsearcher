import React from 'react';
import {Router, Location} from '@reach/router';
import {StateProvider} from 'utils/store';
import {parse} from 'query-string';

import Header from 'components/Header';
import {ToastContainer, toast} from 'react-toastify';

import Main from 'containers/Main';
import Details from 'containers/Details';
import NotFound from 'containers/NotFound';

import styled from '@emotion/styled';
import 'react-toastify/dist/ReactToastify.css';

const Content = styled('div')`
    flex: 1;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: hidden;
`;

const InnerContent = styled(Router)`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 2em;
`;

const routes = [
    {
        component: Main,
        path: '/'
    },
    {
        component: Details,
        path: 'details'
    }
];

const App = () => {
    const initialState = {
        query: '',
        repositories: []
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update': {
                return {
                    ...state,
                    ...action.state
                }
            }
            default:
                return state;
        }
    };

    return (
        <Location>
            {({location}) => {
                location.query = parse(location.search);

                return (
                    <StateProvider initialState={initialState} reducer={reducer}>
                        <Header
                            location={location}
                        />
                        <Content>
                            <InnerContent>
                                {routes.map(({component: Component, path}) => (
                                    <Component
                                        key={path}
                                        path={path}
                                    />
                                ))}
                                <NotFound default />
                            </InnerContent>

                        </Content>
                        <ToastContainer
                            position={toast.POSITION.BOTTOM_CENTER}
                        />
                    </StateProvider>
                )
            }}
        </Location>
    );
};

export default App