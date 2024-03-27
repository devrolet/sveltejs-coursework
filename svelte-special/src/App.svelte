<script>
    import Product from './Product.svelte';
    import CartItems from './CartItems.svelte';

    let renderedComponent = {cmp: Product, title: "Test Product", id: "p1"}

    let toggle = () => {
        if(renderedComponent.cmp === Product) {
            renderedComponent = {cmp: CartItems, title: "Cart Test Product", id: "p2"}
        } else {
            renderedComponent = {cmp: Product, title: "Test Product", id: "p1"}
        }
    }
</script>

<button on:click={toggle}>Toggle Display</button>
<svelte:component 
    this={renderedComponent.cmp}  
    title={renderedComponent.title} 
    id={renderedComponent.id} 
/>