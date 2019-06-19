import React, {useState} from 'react';
import SearchBar from 'components/SearchBar';

import api from 'utils/api';

const Main = () => {
    const [repositories, setRepositories] = useState([]);

    function onSearch(query) {
        api.getRepositories(query)
            .then(({data}) => {
                setRepositories(data.items);
            });
    }

    return (
        <>
            <SearchBar
                onSearch={onSearch}
            />
            {repositories.map((repo) => (
                <div
                    key={repo.id}
                >
                    {repo.url}
                </div>
            ))}
        </>
    )
};

export default Main