import React from 'react';
import {Router} from '@reach/router';
import {StateProvider} from 'utils/store';

import Header from 'components/Header';
import {ToastContainer, toast} from 'react-toastify';

import Main from 'containers/Main';
import Details from 'containers/Details';

import styled from '@emotion/styled';
import 'react-toastify/dist/ReactToastify.css';

const Content = styled('div')`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
`;

const InnerContent = styled(Router)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    padding: 2em;
`;

const App = () => {
    const initialState = {
        query: '',
        repository: null,
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
        <StateProvider initialState={initialState} reducer={reducer}>
            <Header/>
            <Content>
                <InnerContent>
                    <Main path="/"/>
                    <Details path="details/"/>
                </InnerContent>
            </Content>
            <ToastContainer
                position={toast.POSITION.BOTTOM_CENTER}
            />
        </StateProvider>
    );
};

export default App