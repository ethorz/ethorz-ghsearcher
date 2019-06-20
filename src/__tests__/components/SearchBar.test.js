import React from 'react';
import {mount} from 'enzyme';

import SearchBar from '../../components/SearchBar';

const render = (props) => <SearchBar {...props} />;

describe('SearchBar Component', () => {
    it('Render component with default value and onChange handler', () => {
        const onSearch = jest.fn();
        const props = {
            onSearch,
            value: 'test'
        };
        const eventMock = {
            preventDefault: jest.fn()
        };

        const c = mount(render(props));
        const input = c.find('Styled(Input)');
        const form = c.find('Styled(form)');

        expect(input.props().value).toBe(props.value);

        form.simulate('submit', eventMock);

        expect(onSearch).toHaveBeenCalledTimes(1);
        expect(onSearch).toHaveBeenCalledWith(props.value);

        const newValueMock = {
            target: {
                value: 'new_value'
            }
        };

        input.simulate('change', newValueMock);
        form.simulate('submit', eventMock);

        expect(onSearch).toHaveBeenCalledTimes(2);
        expect(onSearch).toHaveBeenCalledWith(newValueMock.target.value);
    });
});