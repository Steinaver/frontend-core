import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Primary = Template.bind({});
// Primary.args = {
//     value: 'Open',
//     items: [
//         { content: 'loremloremlorem ipsum dolor', value: '123' },
//         { content: 'dolor lorem ipsum', value: '456' },
//     ],
// };
//
// export const PrimaryTopLeft = Template.bind({});
// PrimaryTopLeft.args = {
//     direction: 'top left',
//     value: 'Open',
//     items: [
//         { content: 'loremloremlorem ipsum dolor', value: '123' },
//         { content: 'dolor lorem ipsum', value: '456' },
//     ],
// };
//
// export const PrimaryTopRight = Template.bind({});
// PrimaryTopRight.args = {
//     direction: 'top right',
//     value: 'Open',
//     items: [
//         { content: 'loremloremlorem ipsum dolor', value: '123' },
//         { content: 'dolor lorem ipsum', value: '456' },
//     ],
// };
//
// export const PrimaryBottomLeft = Template.bind({});
// PrimaryBottomLeft.args = {
//     direction: 'bottom left',
//     value: 'Open',
//     items: [
//         { content: 'loremloremlorem ipsum dolor', value: '123' },
//         { content: 'dolor lorem ipsum', value: '456' },
//     ],
// };
//
// export const PrimaryBottomRight = Template.bind({});
// PrimaryBottomRight.args = {
//     direction: 'bottom right',
//     value: 'Open',
//     items: [
//         { content: 'loremloremlorem ipsum dolor', value: '123' },
//         { content: 'dolor lorem ipsum', value: '456' },
//     ],
// };
