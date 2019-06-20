import React from 'react';
import {shallow} from 'enzyme';

import ListItem from '../../components/ListItem';

const render = (props) => <ListItem  {...props} />;

describe('ListItem Component', () => {
    it('render only name', () => {
        const name = 'name';

        const c = shallow(render({name}));
        const nameDiv = c.find('Styled(div)').at(2);

        expect(nameDiv.text()).toBe(name);
    });

    it('render name and description', () => {
        const props = {
            name: 'name',
            description: 'description'
        };

        const c = shallow(render(props));
        const name = c.find('Styled(div)').at(2);
        const description = c.find('Styled(div)').at(3);

        expect(name.text()).toBe(props.name);
        expect(description.text()).toBe(props.description);
    });

    it('render full items', () => {
        const onClick = jest.fn();
        const props = {
            name: 'name',
            description: 'description',
            image: 'test.png',
            onClick,
            model: 'test_model'
        };

        const c = shallow(render(props));
        const content = c.find('Styled(div)').at(1);
        const image = c.find('Styled(div)').at(2);
        const name = c.find('Styled(div)').at(3);
        const description = c.find('Styled(div)').at(4);

        const imageStyles = image.prop('style');

        content.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClick).toHaveBeenCalledWith(props.model);

        expect(imageStyles.backgroundImage).toBe(`url(${props.image})`);
        expect(name.text()).toBe(props.name);
        expect(description.text()).toBe(props.description);
    });
});