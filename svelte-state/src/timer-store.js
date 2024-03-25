import { readable } from 'svelte/store';

let count = 0;

export const timer = readable(count, (set) => {
    // only able to subscribe. only executes the code within the readable func
    const interval = setInterval(() => {
        count++;
        set(count);
    }, 1000);

    // Return a cleanup function to prevent memory leaks
    return () => {
        // count would continue from where it left off unless you reset the count
        // count = 0;
        clearInterval(interval);
    }
});