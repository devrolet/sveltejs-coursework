<script>
	import { tick } from 'svelte';
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

	let text = 'This is some dummy text';

	let showModal = false;
	let closeable = false

	// Extract event data to pass data up the chain
	function addToCart(event) {
		console.log(event);
	}

	function deleteProduct(event) {
		console.log(event.detail);
	}

	function transform(event) {
		if(event.which !== 9) {
			return;
		}
		event.preventDefault();
		const selectionStart = event.target.selectionStart;
		const selectionEnd = event.target.selectionEnd;
		const value = event.target.value;

		text = value.slice(0, selectionStart) + 
			   value.slice(selectionStart, selectionEnd).toUpperCase() + 
			   value.slice(selectionEnd);

		tick().then(() => {
			event.target.selectionStart = selectionStart;
			event.target.selectionEnd = selectionEnd;
		});
		
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
<!-- let: is a directive in SvelteJS -->
	<Modal 
		on:cancel="{() => showModal = false}" 
		on:close="{() => showModal = false}"
		let:didAgree={closeable}>
		<h1 slot="header">Hello</h1>
		<p>This works well!</p>
		<!-- Button provided here so it'll take precedence. Default would work if this wasn't here -->
		<button slot="footer" on:click={() => showModal = false} disabled={!closeable}>Confirm</button>
	</Modal>
{/if}

<textarea rows="5" value="{text}" on:keydown={transform}></textarea>
