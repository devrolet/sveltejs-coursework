<script>
  import { createEventDispatcher } from 'svelte';
  import Button from "./Button.svelte";
  import { fade, fly } from 'svelte/transition'
  
  export let title;

  const dispatch = createEventDispatcher();

  let closeModal = () => dispatch('cancel');
</script>

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    .modal {
        position: fixed;
        top: 10vh;
        left: 10%;
        max-height: 80vh;
        background: white;
        border-radius: 5px;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        overflow: scroll;
    }

    h1 {
        padding: 1rem;
        margin: 0;
        border-bottom: 1px solid #ccc;
        font-family: 'Roboto Slab', sans-serif;
    }

    .content {
        padding: 1rem;
    }

    footer {
        padding: 1rem;
    }

    @media (min-width: 768px) {
        .modal { 
            width: 40rem;
            left: calc(50% - 20rem);
        }
    }
</style>

<div transition:fade class="modal-backdrop" on:click={closeModal} />
<!-- Animating can only happen on HTML elements, not our custom components -->
<div transition:fly={{ y: 300 }} class="modal">
    <h1>{title}</h1>
    <div class="content">
        <slot />
    </div>
    <footer>
        <slot name="footer">
            <Button on:click={closeModal}>Close</Button>
        </slot>
    </footer>
</div>