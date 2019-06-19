import React from 'react';
import SearchBar from 'components/SearchBar';
import ListItem from 'components/ListItem';
import { navigate } from '@reach/router'
import {useStateValue} from 'utils/store';

import api from 'utils/api';

import styled from '@emotion/styled';
import {colors, fonts} from 'utils/config';

const Empty = styled('div')`
    color: ${colors.night};
    font-size: 50px;
    padding: 1em;
    text-align: center;
    font-family: ${fonts.montserrat}
`;

const Item = styled(ListItem)`
    padding: 1em 0em;
`;

const Main = () => {
    const [store, dispatch] = useStateValue();

    function onSearch(query) {
        api.getRepositories(query)
            .then(({data}) => {
                dispatch({
                    type: 'update',
                    state: {
                        repositories: data.items,
                        query
                    }
                });
            });
    }

    function onSelectRepository(repository) {
        const profile = repository.owner.login;
        const repo = repository.name;

        dispatch({
            type: 'update',
            state: {
                repository: {
                    profile,
                    repo
                }
            }
        });

        navigate(`/details?profile=${profile}&repo=${repo}`);
    }

    return (
        <>
            <SearchBar
                value={store.query}
                onSearch={onSearch}
            />
            {store.repositories.map((repo) => (
                <Item
                    key={repo.id}
                    name={repo.full_name}
                    image={repo.owner.avatar_url}
                    description={repo.description}
                    model={repo}
                    onClick={onSelectRepository}
                />
            ))}
            {!store.repositories.length &&
                <Empty>
                    Repository list is empty
                </Empty>
            }
        </>
    )
};

export default Main