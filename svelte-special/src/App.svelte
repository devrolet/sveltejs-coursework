<script>
    import Product from './Product.svelte';
    import CartItem from './CartItems.svelte';
  import CartItems from './CartItems.svelte';

    let showProduct = true;

    let toggle = () => {
        showProduct = !showProduct;
    }
</script>

<button on:click={toggle}>Toggle Display</button>
{#if showProduct}
    <Product  title="Test Product" id="p1" />
{:else}
    <CartItems title="Another Product" id="p2" />
{/if}