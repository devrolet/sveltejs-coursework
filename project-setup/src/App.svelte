<script>
	export let name;
	export let age;
	export let occupation;
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
<p>{name} works as a {occupation}</p>
