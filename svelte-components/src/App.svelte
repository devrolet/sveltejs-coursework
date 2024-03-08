<script>
	import Product from "./Product.svelte";

	// Extract event data to pass data up the chain
	function addToCart(event) {
		console.log(event);
	}

	function deleteProduct(event) {
		console.log(event.detail);
	}
</script>
<!-- Call the functions to extract data from detail property or obj -->
<Product 
	productTitle="A Book" 
	on:add-to-cart={addToCart}
	on:delete={deleteProduct} 
/>
