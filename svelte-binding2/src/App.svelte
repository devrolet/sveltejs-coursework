<script>
    let val = 'Malichi';
	$: console.log(val);
	
    let setValue = event => val = event.target.setValue;
</script>

<h1>Bindings & Forms</h1>
<input type="text" bind:value={val}>
