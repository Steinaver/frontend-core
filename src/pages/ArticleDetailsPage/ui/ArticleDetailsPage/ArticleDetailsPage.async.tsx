import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // test loading
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
