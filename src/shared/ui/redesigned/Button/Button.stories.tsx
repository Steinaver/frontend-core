import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//     children: 'Text',
// };
//
// export const Clear = Template.bind({});
// Clear.args = {
//     children: 'Text',
//     variant: ButtonTheme.CLEAR,
// };
//
// export const ClearInverted = Template.bind({});
// ClearInverted.args = {
//     children: 'Text',
//     variant: ButtonTheme.CLEAR_INVERTED,
// };
//
// export const Outline = Template.bind({});
// Outline.args = {
//     children: 'Text',
//     variant: ButtonTheme.OUTLINE,
// };
//
// export const OutlineSizeL = Template.bind({});
// OutlineSizeL.args = {
//     children: 'Text',
//     variant: ButtonTheme.OUTLINE,
//     size: ButtonSize.L,
// };
//
// export const OutlineSizeXl = Template.bind({});
// OutlineSizeXl.args = {
//     children: 'Text',
//     variant: ButtonTheme.OUTLINE,
//     size: ButtonSize.XL,
// };
//
// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//     children: 'Text',
//     variant: ButtonTheme.OUTLINE,
// };
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const BackgroundTheme = Template.bind({});
// BackgroundTheme.args = {
//     children: 'Text',
//     variant: ButtonTheme.BACKGROUND,
// };
//
// export const BackgroundInverted = Template.bind({});
// BackgroundInverted.args = {
//     children: 'Text',
//     variant: ButtonTheme.BACKGROUND_INVERTED,
// };
//
// export const Square = Template.bind({});
// Square.args = {
//     children: '>',
//     variant: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
// };
//
// export const SquareSizeL = Template.bind({});
// SquareSizeL.args = {
//     children: '>',
//     variant: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.L,
// };
//
// export const SquareSizeXl = Template.bind({});
// SquareSizeXl.args = {
//     children: '>',
//     variant: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.XL,
// };
//
// export const Disabled = Template.bind({});
// Disabled.args = {
//     children: '>',
//     variant: ButtonTheme.OUTLINE,
//     disabled: true,
// };
