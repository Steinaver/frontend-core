import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';

export default {
    title: 'entities/ProfileCardDeprecated',
    component: ProfileCardDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCardDeprecated>;

const Template: ComponentStory<typeof ProfileCardDeprecated> = (args) => (
    <ProfileCardDeprecated {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
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

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
