<script>
    import { writable } from 'svelte/store';
    import { tweened } from 'svelte/motion';
    import { cubicIn } from 'svelte/easing';
    import { fade, fly, slide, scale } from 'svelte/transition'

    import Spring from './Spring.svelte';

    let boxInput;
    let showParagraph = false;

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

    let discard = (value) => {
        boxes = boxes.filter(el => el !== value);
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

<button on:click={() => showParagraph = !showParagraph}>Toggle</button>
{#if showParagraph}
<p transition:fly={{x: 300}}>Can you see me?</p>
{/if}

<hr>

<input type="text" bind:this={boxInput} />
<button on:click={addBox}>Add</button>
{#if showParagraph}
    {#each boxes as box (box)}
    <!-- fade, slide, and scale work out the box, fly needs more params, others can use params as well easing can be added too -->
    <!-- All transitions have delay, duration, and easing -->
    <!-- Scale has easing, start, and opacity -->
    <!-- Fly has x: and y: offset -->
        <div transition:fly={{ easing: cubicIn, x: 0, y: 300 }} on:click={discard.bind(this, box)} >{box}</div>
    {/each}
{/if}

