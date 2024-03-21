<script>
	import CustomInput from "./CustomInput.svelte";
	import Toggle from "./Toggle.svelte";

	let selectionOption = 1;
    let val = 'Malichi';
	let price = 0;
	let agreed;
	let favColor = 'red';
	let favTeam = ['Kings'];
	let singleFavColor = 'black'

	$: console.log(val);
	$: console.log(selectionOption);
	$: console.log(price);
	$: console.log(agreed);
	$: console.log(favColor);
	$: console.log(favTeam);
	$: console.log(singleFavColor);

    let setValue = event => val = event.target.setValue;

	let saveData = () => {
		// Vanilla JS solution
		// console.log(document.querySelector('#username').value);
	};
</script>

<!-- <h1>Bindings & Forms</h1>
<input type="text" bind:value={val}> -->
<CustomInput bind:val={val} />

<Toggle bind:chosenOption={selectionOption} />

<input 
	type="number" 
	bind:value="{price}" />

<label>
	<!-- Bind to a checkbox -->
	<input type="checkbox" bind:checked={agreed} />
	Agree to Terms?
</label>

<h1>Favorite Color?</h1>
<!-- Bind to radio button. Note: If a value is selected beforehand i.e. value="red" the DOM will select that color as a default -->
<label>
	<input type="radio" name="color" bind:group={favColor} value="red">
	Red
</label>
<label>
	<input type="radio" name="color" bind:group={favColor} value="green">
	Green
</label>
<label>
	<input type="radio" name="color" bind:group={favColor} value="blue">
	Blue
</label>

<h1>Favorite Team?</h1>
<!-- Bind to radio button. Note: If a value is selected beforehand i.e. value="red" the DOM will select that color as a default -->
<label>
	<input type="checkbox" name="color" bind:group={favTeam} value="Kings">
	Kings
</label>
<label>
	<input type="checkbox" name="color" bind:group={favTeam} value="Lakers">
	Lakers
</label>
<label>
	<input type="checkbox" name="color" bind:group={favTeam} value="Bulls">
	Bulls
</label>


<select bind:value={singleFavColor}>
	<option value="green">Green</option>
	<option value="blue">Blue</option>
	<option value="black">Black</option>
</select>

<input type="text" id="username">
<button on:click="{saveData}">Save Data</button>
