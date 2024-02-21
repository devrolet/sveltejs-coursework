<script>
	let name = "NBCU";
	let age = 101;
	let industry = "Media Organization";

	let incrementAge = () => age += 1;
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

<h1>Hello {name}!</h1>
<h3>You are {age} years old today</h3>
<p>{name} is in the {industry} industry</p>
<!-- The {} are required, "" are not, enter name of function w/o the () to execute -->
<button on:click="{incrementAge}">Change Age</button> 
