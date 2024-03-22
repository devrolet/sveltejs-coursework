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
	let usernameInput;
	let someDiv;
	let newCanvas;
	let customInput;

	$: console.log(val);
	$: console.log(selectionOption);
	$: console.log(price);
	$: console.log(agreed);
	$: console.log(favColor);
	$: console.log(favTeam);
	$: console.log(singleFavColor);
	$: console.log(customInput);

    let setValue = event => val = event.target.setValue;

	let saveData = () => {
		// Vanilla JS solution
		// console.log(document.querySelector('#username').value);
		console.log(usernameInput.value);
		console.dir(usernameInput);
		console.dir(someDiv);
		console.dir(newCanvas);
		customInput.empty();
	};
</script>

<!-- <h1>Bindings & Forms</h1>
<input type="text" bind:value={val}> -->
<CustomInput bind:val={val} bind:this={customInput} />

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
<!-- Bind to element reference -->
<input type="text" bind:this={usernameInput}>
<button on:click="{saveData}">Save Data</button>

<div bind:this={someDiv}></div>

<canvas bind:this={newCanvas}></canvas>