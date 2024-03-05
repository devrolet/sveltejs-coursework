<script>
    export let productTitle;
</script>

<article>
    <h1>{productTitle}</h1>
    <!-- Event forwarded to another component (App in this case) -->
    <button on:click>Add to Cart</button>
    <button>Delete</button>
</article>