<script>
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import Button from "./UI/Button.svelte";
  import { timer } from "./timer-store.js";

  let showCart = true;

  // timer.subscribe(count => {
  //   console.log('App: ', count);
  // });
</script>

<Button on:click={() => {showCart = !showCart}}>Toggle Cart</Button>
{#if showCart}
  <Cart />
{/if}
<Products />
<!-- Create autosubscription -->
<p>Count: {$timer}</p>
