<script>
	let name = "Chet Hill";
	let age = 46;
	let industry = "Computer Programming";

	// Labeled Statements anyword: action
	$: uppercaseName = name.toUpperCase();

	$: console.log(name);

	$: if(name === 'Malichi Hill') age = 23;

	let incrementAge = () => age += 1;

	let changeName = () => name = "Malichi Hill";
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
<p>{name} is in the {industry} industry</p>
<!-- The {} are required, "" are not, enter name of function w/o the () to execute -->
<button on:click="{incrementAge}">Change Age</button> 
<button on:click="{changeName}">Change Name</button>
