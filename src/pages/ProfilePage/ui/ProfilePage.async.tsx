import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // test loading
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
