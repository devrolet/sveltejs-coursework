<script>
	import ContactCard from "./ContactCard.svelte";

	let name = "Chet Hill";
	let age = 46;
	let occupation = "Application Engineer";
	let dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

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
<input type="text" bind:value="{name}">

<ContactCard userName="{name}" title="{occupation}" description="{dummyText}" />
