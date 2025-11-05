import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Story /></div>,
    ],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Message 1',
                    description: 'Hello world!',
                },
                {
                    id: '2',
                    title: 'Message 2',
                    description: 'Hello world!',
                },
                {
                    id: '3',
                    title: 'Message 3',
                    description: 'Hello world!',
                },
            ],
        },
    ],
};
