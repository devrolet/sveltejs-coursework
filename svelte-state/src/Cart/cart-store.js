import { writable } from 'svelte/store';

// Create store by calling the writable function and giving it a var
// always pass a default value (obj, array, num, string, function)

// Going with customCart = then everything in the curly braces works as well you just have to export below
function createCart() {
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

  return {
    subscribe: cart.subscribe,
    addItem: (item) => {
      cart.update(items => {
        if(items.find(i => i.id === item.id)) {
          return [...items];
        }
        return [...items, item];
      })
    },
    removeItem: (id) => {
      cart.update(items => {
        return items.filter(i => i.id !== id);
      })
    }
  }
}

// Use the store outside of the file by exporting it as either default or named export
export default createCart();
// Export if a variable was used instead of a function
// export default customCart 

