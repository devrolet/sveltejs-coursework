<script>
    import { writable } from 'svelte/store';
    import { tweened } from 'svelte/motion';
    import { cubicIn } from 'svelte/easing';

    import Spring from './Spring.svelte';

    let boxInput;

    const progress = tweened(0, {
        delay: 0,
        duration: 700,
        easing: cubicIn
    });
    setTimeout(() => {
        progress.set(0.5);
    }, 1500);

    let boxes = [];

    let addBox = () => {
        boxes = [...boxes, boxInput.value];
    }
</script>
<style>
    div {
        width: 10rem;
        height: 10rem;
        background: #ccc;
        margin: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 1rem;
    }
</style>
<!-- <progress value={$progress}></progress> -->
<!-- <Spring /> -->
<input type="text" bind:this={boxInput} />
<button on:click={addBox}>Add</button>
{#each boxes as box (box)}
    <div>{box}</div>
{/each}


