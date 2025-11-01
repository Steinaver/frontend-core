import { rm } from 'fs/promises';
import path from 'path';

async function clearCache() {
    const cachePath = path.resolve('..', 'node_modules', '.cache');
    try {
        await rm(cachePath, { recursive: true, force: true });
    } catch (error) {
        console.log('Error deleting directory:', error.message);
    }
}

clearCache();
