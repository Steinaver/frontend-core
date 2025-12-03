import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

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

export const Primary = Template.bind({});
// Primary.args = {
//     data: {
//         username: 'admin',
//         age: 18,
//         country: Country.Lithuania,
//         first: 'John',
//         lastname: 'Waltman',
//         city: 'Vilnius',
//         currency: Currency.USD,
//     },
// };
//
// export const withError = Template.bind({});
// withError.args = {
//     error: 'error',
// };
//
// export const Loading = Template.bind({});
// Loading.args = {
//     isLoading: true,
// };
