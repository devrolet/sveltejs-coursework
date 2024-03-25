<script>
  import { onDestroy } from 'svelte';
  import { timer } from "../timer-store.js";
  import cartItems from './cart-store.js';
  import CartItem from "./CartItem.svelte";


  let unsubscribe = timer.subscribe(count => {
    console.log('Cart: ', count);
  })

  // AUTOSUBSCRIPTIONS IN SVELTE.JS


  // let items;
  // // Subscribe to the store with subscribe method (Is this like NG Observables or maybe services?)
  // let unsubscribe = cartItems.subscribe(its => {
  //   items = its;
  //   console.log('Items: ', items);
  // });

  // // Always unsubscribe from subscriptions to prevent memory leaks
  onDestroy(() => {
    if(unsubscribe) {
      unsubscribe();
    }
  })

  // export let items = [
  //   {
  //     id: "p1",
  //     title: "Test",
  //     price: 9.99
  //   },
  //   {
  //     id: "p2",
  //     title: "Test",
  //     price: 9.99
  //   }
  // ];
</script>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

<section>
  <h1>Cart</h1>
  <ul>
    <!-- AUTOSUBSCRIPTIONS IN SVELTE: Call your store variable preceded by $ for autosub -->
    {#each $cartItems as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>
