<script>
	let enteredPassword = '';
	let passwordValidity = 'short';

	let passwords = [];


	$: if(enteredPassword.trim().length < 5) {
		passwordValidity = 'short';
	} else if(enteredPassword.trim().length > 10) {
		passwordValidity = 'long'
	} else {
		passwordValidity = 'valid';
	}

	let confirmPassword = () => {
		if(passwordValidity === 'valid') {
			passwords = [...passwords, enteredPassword];
		}
	}

	let removePassword = (index) => {
		passwords = passwords.filter((pw, idx) => {
			return idx !== index;
		});
	}
</script>
<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
	<li><strike>Add a password input field and save the user input in a variable.</strike></li>
	<li><strike>Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</strike></li>
	<li><strike>Output the password in a paragraph tag if it's between these boundaries.</strike></li>
	<li><strike>Add a button and let the user add the passwords to an array.</strike></li>
	<li><strike>Output the array values (= passwords) in a unordered list (ul tag).</strike></li>
	<li><strike>Bonus: If a password is clicked, remove it from the list.</strike></li>
</ol>

<label for="pw-input">Enter Password</label>
<input id="pw-input" type="password" bind:value={enteredPassword} />

<button on:click={confirmPassword}>Confirm Password</button>

{#if passwordValidity === 'short'}
	<p>Password is too short</p>
{:else if passwordValidity === 'long'}
	<p>Password is too long</p>
{:else}
	<p>Password: {enteredPassword}</p>
{/if}

<ul>
	<!-- The element in the () is considered a key identifier which helps performance by only removing dom elements that have to be removed -->
	{#each passwords as pw, i (pw)}
		<li on:click={removePassword.bind(this, i)}>{pw}</li>
	{/each}
</ul>
