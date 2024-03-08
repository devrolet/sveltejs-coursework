<script>
	import Product from "./Product.svelte";
	import Modal from "./Modal.svelte";

	let products = [
		{
			id: 'p1',
			title: 'A Book About Everything',
			price: 9.99
		},
		{
			id: 'p2',
			title: 'A Book About Nothing',
			price: 19.99,
			bestseller: true
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
<!-- Using component to output multiple slots -->
<Modal>
	<h1 slot="header">Hello</h1>
	<p>This works well!</p>
	<button slot="footer">Confirm</button>
</Modal>
<!-- Can have as many as you need -->
<!-- <Modal>
	<h1>Hello</h1>
	<h2>This is really cool</h2>
</Modal> -->
