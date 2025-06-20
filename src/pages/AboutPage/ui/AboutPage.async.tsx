import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // test loading
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
