import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    //@ts-ignore
    // test loading
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));