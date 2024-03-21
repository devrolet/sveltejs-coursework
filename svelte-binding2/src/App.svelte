<script>
	import CustomInput from "./CustomInput.svelte";
	import Toggle from "./Toggle.svelte";

	let selectionOption = 1;
    let val = 'Malichi';
	let price = 0;
	$: console.log(val);
	$: console.log(selectionOption)
	$: console.log(price);

    let setValue = event => val = event.target.setValue;
</script>

<!-- <h1>Bindings & Forms</h1>
<input type="text" bind:value={val}> -->
<CustomInput bind:val={val} />

<Toggle bind:chosenOption={selectionOption} />

<input 
	type="number" 
	bind:value="{price}" 
>
