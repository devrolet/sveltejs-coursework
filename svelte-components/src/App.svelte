<script>
	import Product from "./Product.svelte";
</script>
<!-- Event forwarded to App component to execute on:click -->
<Product productTitle="A Book" on:click={() => alert('Clicked')} />
