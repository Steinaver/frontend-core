import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

// Разницы между синтаксисом как в StyleDecorator и тут - нет. Пример для наглядности
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
