import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout } from './MainLayout';

export default {
    title: 'app/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
    <MainLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
