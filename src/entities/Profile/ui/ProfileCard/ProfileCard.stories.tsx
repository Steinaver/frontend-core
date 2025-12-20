import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const primaryArgs = {
    data: {
        username: 'admin',
        age: 18,
        country: Country.Lithuania,
        first: 'John',
        lastname: 'Waltman',
        city: 'Vilnius',
        currency: Currency.USD,
    },
};

export const Primary = Template.bind({});
Primary.args = primaryArgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = primaryArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};

export const WithErrorRedesigned = Template.bind({});
WithErrorRedesigned.args = {
    error: 'error',
};
WithErrorRedesigned.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
    isLoading: true,
};
LoadingRedesigned.decorators = [NewDesignDecorator];
