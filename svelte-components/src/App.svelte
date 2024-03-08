<script>
	import Product from "./Product.svelte";

	let products = [
		{
			id: 'p1',
			title: 'A Book About Everything',
			price: 9.99
		},
		{
			id: 'p2',
			title: 'A Book About Nothing',
			price: 19.99
		}
	]

	// Extract event data to pass data up the chain
	function addToCart(event) {
		console.log(event);
	}

	function deleteProduct(event) {
		console.log(event.detail);
	}
</script>
<!-- Call the functions to extract data from detail property or obj -->
{#each products as product}
<!-- Props could be called by their name for example product.title or ...product will use spread operator to show all products-->
<Product 
	{...product} 
	on:add-to-cart={addToCart}
	on:delete={deleteProduct} />
{/each}
