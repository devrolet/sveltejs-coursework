<script>
	let password = '';
	$: console.log(password);
</script>
<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
	<li><strike>Add a password input field and save the user input in a variable.</strike></li>
	<li>Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</li>
	<li>Output the password in a paragraph tag if it's between these boundaries.</li>
	<li>Add a button and let the user add the passwords to an array.</li>
	<li>Output the array values (= passwords) in a unordered list (ul tag).</li>
	<li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>

<label for="pw-input">Enter Password</label>
<input id="pw-input" type="password" bind:value={password} />
