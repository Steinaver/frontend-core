import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // test loading
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
