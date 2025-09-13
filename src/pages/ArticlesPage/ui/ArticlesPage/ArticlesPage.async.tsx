import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // test loading
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
