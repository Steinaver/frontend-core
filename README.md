## Launching the project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - launch the server + frontend of the project in dev mode
```

----

## Scripts

- `npm run start` - Start the frontend project on webpack dev server
- `npm run start:vite` - Start the frontend project on vite
- `npm run start:dev` - Start the frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Start the frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minified)
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss style files with linter
- `npm run lint:scss:fix` - Fix scss files with style linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate a full report for screenshot tests (json + html)
- `npm run test:ui:json` - Generate a json report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build the Storybook
- `npm run generate:slice` - Script for generating FSD slices

----

## Project Architecture

The project was written in accordance with the Feature Sliced Design methodology.

Link to documentation: [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, it is recommended to install a plugin for webstorm/vscode.

Link to documentation - [i18next](https://react.i18next.com/)

----

## Tests

The project includes four types of tests:

1) Regular unit tests using Jest – `npm run test:unit`
2) Component tests using React Testing Library – `npm run test:unit`
3) Visual regression (screenshot) tests using Loki – `npm run test:ui`
4) End-to-end (E2E) tests using Cypress – `npm run test:e2e`

For more details - see the [testing documentation](/docs/tests.md)

----

## Linting

The project uses Eslint to check Typescript code and Stylelint to check style files.

In addition, to strictly control the main architectural principles,
we use our own eslint plugin *eslint-plugin-react-project-plugin*,
which contains three rules:

1) path-checker - prohibits the use of absolute imports within the same module
2) layer-imports – checks the correctness of layer usage according to the FSD (Feature-Sliced Design) architecture
   (for example, widgets cannot be used inside features or entities).
3) public-api-imports - allows imports from other modules only from the public API. Has auto fix

##### Running linters

- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss style files with linter
- `npm run lint:scss:fix` - Fix scss files with style linter

----

## Storybook

In the project, story cases are created for each component.
Server requests are mocked using `storybook-addon-mock`.

The file with story cases is created next to the component with the .stories.tsx extension

You can run the storybook with the following command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

----

## Project configuration

The project contains two configurations for development:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both builders are adapted to the main features of the application.

All configurations are stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring, simplifying code writing, generating reports, etc.

----

## CI Pipeline and Pre-commit Hooks

The GitHub Actions configuration is located in /.github/workflows.
The CI pipeline runs all types of tests, builds the project and Storybook, and performs linting.

In pre-commit hooks, the project is checked by linters, config in /.husky.

----

## Working with Data

Data interaction is handled using **Redux Toolkit**.
Whenever possible, reusable entities should be normalized using **EntityAdapter**.

Server requests are made via [RTK Query](/src/shared/api/rtkApi.ts)

For asynchronous reducer loading (to avoid including them in the main bundle),
the project uses
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
