import { writable } from 'svelte/store';

// Create store by calling the writable function and giving it a var
// always pass a default value (obj, array, num, string, function)
const cart = writable([
    {
        id: "p3",
        title: "Test",
        price: 9.99
      },
      {
        id: "p4",
        title: "New Test",
        price: 9.99
      }
]);

// Use the store outside of the file by exporting it as either default or named export
export default cart;

