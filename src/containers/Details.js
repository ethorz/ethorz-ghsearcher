import React, {useState, useEffect} from 'react';
import ListItem from 'components/ListItem';

import api from 'utils/api';

import styled from '@emotion/styled';

const Item = styled(ListItem)`
    padding: 2em 0em;
`;

const Title = styled('div')`
    text-align: center;
    font-size: 24px;
`;

const Details = (props) => {
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(true);
    const {profile, repo} = props.location.query;

    useEffect(() => {
        if (profile && repo) {
            setLoading(true);
            api.getBranches(profile, repo)
                .then(({data}) => {
                    setLoading(false);
                    setBranches(data);
                }).catch(() => {
                    setLoading(false);
            });
        }
    }, [profile, repo]);

    function renderTitle() {
        const text = branches.length ? 'List of branches' : 'List of branches is empty';

        if (loading) {
            return null;
        }

        return (
            <Title>
                {text}
            </Title>
        )
    }

    return (
        <React.Fragment>
            {renderTitle()}
            {branches.map((branch, index) => (
                <Item
                    key={`${branch.name}_${index}`}
                    name={branch.name}
                />
            ))
            }
        </React.Fragment>
    )
};

export default Details