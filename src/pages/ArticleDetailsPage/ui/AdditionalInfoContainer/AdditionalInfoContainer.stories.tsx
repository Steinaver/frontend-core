import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';

export default {
    title: 'app/AdditionalInfoContainer',
    component: AdditionalInfoContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdditionalInfoContainer>;

const Template: ComponentStory<typeof AdditionalInfoContainer> = (args) => (
    <AdditionalInfoContainer />
);

export const Primary = Template.bind({});
Primary.args = {};
