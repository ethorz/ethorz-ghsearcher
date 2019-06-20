import React from 'react';
import { navigate } from '@reach/router';
import {shallow} from 'enzyme';

import NotFound from '../../containers/NotFound';

jest.mock('@reach/router', () => ({
    navigate: jest.fn(),
}));

describe('NotFound Container', () => {
    it('render default', () => {
        const c = shallow(<NotFound />);
        const title = c.find('span');
        const button = c.find('Button');

        expect(title.text()).toBe('404 Not found');
        expect(button.props().value).toBe('Back to main');

        button.simulate('click');

        expect(navigate).toHaveBeenCalledTimes(1);
        expect(navigate).toHaveBeenCalledWith('/');
    });
});