<script>
    import { onMount } from 'svelte';
    import hobbyStore from './hobby-store.js';

    let hobbies = [];
    let hobbyInput;
    let isLoading = false;

    onMount(() => {
        isLoading = true;
    fetch('https://meetup-svelte-app-default-rtdb.firebaseio.com/hobbies.json')
        .then(res => {
            if(!res.ok) {
                throw new Error("Failed");
            }
            return res.json();
        })
        .then(data => {
            isLoading = false;
            // Extract OBJ values from cloud db
            hobbyStore.setHobbies(Object.values(data));

            return hobbies;
        })
        .catch(err => {
            isLoading = false;
            console.log(err);
        });
    });

    let addHobby = () => {
        // hobbies = [...hobbies, hobbyInput.value];
        hobbyStore.addHobby(hobbyInput.value);

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
            console.log('Saved Data!');
            // res.json() => Promise with a object that contains the id
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

    /* ul {
        list-style-type: none;
    } */
</style>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput}>
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
    <p>Loading...</p>
{:else}
<ul>
    {#each $hobbyStore as hobby}
    <li>{hobby}</li>
    {/each}
</ul>
{/if}

<!-- Await block good for data that will not change directly -->
<!-- {#await getHobbies}
    <p>Loading...</p>
{:then hobbyData}
<ul>
    {#each hobbyData as hobby}
        <li>{hobby}</li>
    {/each}
</ul>
{:catch error}
    <p>{error.message}</p>
{/await} -->