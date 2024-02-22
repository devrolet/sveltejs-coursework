<script>
	import ContactCard from "./ContactCard.svelte";

	let name = "";
	let age = 46;
	let occupation = "";
	let description = "";
	let imgURL = "";
	// Labeled Statements anyword: action
	$: uppercaseName = name.toUpperCase();

	$: console.log(name);

	$: if(name === 'Malichi Hill') age = 23;

	let incrementAge = () => age += 1;

	let changeName = () => name = "Malichi Hill";

	let nameInput = (event) => {
		const enteredValue = event.target.value;
		name = enteredValue;
	}
</script>

<style>
	h1 {
		color: green;
	}
	h3 {
		color: blue;
		font-family: serif;
	}
</style>

<h1>Hello {uppercaseName}!</h1>
<h3>You are {age} years old today</h3>
<p>{name} works as a {occupation}</p>
<!-- The {} are required, "" are not, enter name of function w/o the () to execute -->
<button on:click="{incrementAge}">Change Age</button> 
<!-- <button on:click="{changeName}">Change Name</button> -->
<!-- <input type="text" value="{name}" on:input="{nameInput}"> -->
<br>
<form>
	<label for="username">Username</label>
	<input type="text" id="username" bind:value="{name}" />

	<label for="job-title">Job Title</label>
	<input type="text" id="job-title" bind:value="{occupation}" />

	<label for="desc">Description</label>
	<textarea rows="4" id="desc" bind:value="{description}"></textarea>

	<label for="image-url">Enter Image URL</label>
	<input type="text" id="image-url" bind:value="{imgURL}" />
</form>
<!-- 
	If property and value is the same name you can use just the name in curly braces
	example {description} below. These are called self-extending properties in SvelteJS
-->
<ContactCard 
	userName="{name}" 
	jobTitle="{occupation}" 
	{description} 
	userImg="{imgURL}" 
/>
