import { useCallback, useRef } from 'react';

/**
 * A hook that ensures the provided function is executed at most once within the specified delay period.
 * Subsequent calls within the delay are ignored until the delay has passed.
 *
 * @param callback - The function to be throttled
 * @param delay - The minimum delay (in milliseconds) between consecutive executions
 */

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);

    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;

            setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
}
