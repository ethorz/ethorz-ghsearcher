import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../components/Header';

const render = (props) => <Header  {...props} />;

describe('Header Component', () => {
    it('Render default header', () => {
        const location = {
            query: {}
        };
        const c = shallow(render({location}));
        const title = c.find('Styled(h1)');

        expect(title.length).toBe(1);
        expect(title.text()).toBe('Github repositories searcher');
    });

    it('Render with title from props', () => {
        const location = {
            query: {
                profile: 'ethorz',
                repo: 'react-smart-tooltip'
            }
        };
        const c = shallow(render({location}));
        const title = c.find('Styled(h1)');
        const icon = c.find('Styled(Component)');

        expect(icon.length).toBe(1);
        expect(title.length).toBe(1);
    });
});