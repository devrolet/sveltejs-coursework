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
	];

	let showModal = false;

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

<!-- Inline version of calling the on:click event -->
<button on:click="{() => showModal = true}">Show Modal</button>

<!-- Using component to output multiple slots -->
{#if showModal}
<Modal>
	<h1 slot="header">Hello</h1>
	<p>This works well!</p>
	<button slot="footer">Confirm</button>
</Modal>
{/if}
