<script>
    let hobbies = [];
    let hobbyInput;
    let isLoading = false;

    fetch('https://meetup-svelte-app-default-rtdb.firebaseio.com/hobbies.json')
        .then(res => {
            if(!res.ok) {
                throw new Error("Failed");
            }
            return res.json();
        })
        .then(data => {
            // Extract OBJ values
            hobbies = Object.values(data);
            // Extract OBJ keys
            let keys = Object.keys(data);
            console.log(keys);
        })
        .catch(err => {
            console.log(err);
        })

    let addHobby = () => {
        hobbies = [...hobbies, hobbyInput.value];

        isLoading = true;
        // POST REQUEST
        fetch('https://meetup-svelte-app-default-rtdb.firebaseio.com/hobbies.json', {
            method: 'POST',
            body: JSON.stringify(hobbyInput.value),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            isLoading = false;
            if(!res.ok) {
                throw new Error('Failed');
            }
            //...
            console.log('Saved Data!');
        }).catch(err => {
            isLoading = false;
            console.log(err);
        });
    }
</script>

<style>
    button {
        background-color: green;
        color: white;
    }
</style>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput}>
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
    <p>Loading...</p>
{:else}
<ul>
    {#each hobbies as hobby}
    <li>{hobby}</li>
    {/each}
</ul>
{/if}