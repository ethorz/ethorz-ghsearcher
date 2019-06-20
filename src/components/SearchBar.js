import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Button from 'components/Button';

import styled from '@emotion/styled';

const Container = styled('form')`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SearchInput = styled(Input)`
    width: 70%;
    border-radius: 5px 0px 0px 5px;
`;

const SearchButton = styled(Button)`
    width: 30%;
    border-radius: 0px 5px 5px 0px;
`;

const SearchBar = (props) => {
    const [value, setValue] = useState(props.value);

    function onChange(e) {
        const newValue = e.target.value;
        setValue(newValue);
    }

    function onSubmit(e) {
        e.preventDefault();

        props.onSearch(value);
    }

    return (
        <Container
            onSubmit={onSubmit}
        >
            <SearchInput
                value={value}
                onChange={onChange}
            />
            <SearchButton
                type="submit"
                value="Search"
            />
        </Container>
    )
};

SearchBar.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onSearch: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
    value: ''
};

export default SearchBar