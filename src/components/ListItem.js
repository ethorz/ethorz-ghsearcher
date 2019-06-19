import React from 'react';

import styled from '@emotion/styled';
import {colors} from 'utils/config';

const Container = styled('div')`
`;

const Content = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border: 1px solid ${colors.grey};
    border-radius: 5px;
    cursor: pointer;
`;

const Title = styled('div')`
    color: ${colors.night};
    font-size: 24px;
    font-weight: bold;
    width: 100%;
`;

const Description = styled('div')`
    color: ${colors.grey};
    font-size: 16px;
    width: 100%;
    margin-top: 10px;
`;

const Image = styled('div')`
    width: 50px;
    height: 50px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin-right: 30px;
`;

const ListItem = (props) => {
    function onClick() {
        if (props.onClick) {
            props.onClick(props.model);
        }
    }

    return (
        <Container
            className={props.className}
        >
            <Content
                onClick={onClick}
            >
                {props.image &&
                <div>
                    <Image
                        style={{
                            backgroundImage: `url(${props.image})`
                        }}
                    />
                </div>
                }
                <div>
                    {props.name &&
                    <Title>
                        {props.name}
                    </Title>
                    }
                    {props.description &&
                    <Description>
                        {props.description}
                    </Description>
                    }
                </div>
            </Content>
        </Container>
    )
};

export default ListItem