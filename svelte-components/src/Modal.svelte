<script> // FIRST STEP OF LIFECYCLE
    import  { createEventDispatcher, onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';

    let dispatch = createEventDispatcher();

    let agreed = false;
    let autoscroll = false;

    // Could call a function or run anon func
    onMount(() => console.log('On Mount'));
    onDestroy(() => console.log('On Destroy'));

    // Add functions or anon
    beforeUpdate(() => {
        console.log('Before Update');
        autoscroll = agreed;
    });
    afterUpdate(() => {
        console.log('After Update');
        if(autoscroll) {
            const modal = document.querySelector('.modal');
            modal.scrollTo(0, modal.scrollHeight);
        }
    });

    console.log('Script executed');
</script>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    .modal {
        padding: 1rem;
        position: fixed;
        top: 10vh;
        left: 10%;
        width: 80%;
        max-height: 15vh;
        background: white;
        border-radius: 5px;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        overflow: scroll;
    }

    header {
        border-bottom: 1px solid #ccc;
    }
</style>

<div class="backdrop" on:click="{() => dispatch('cancel')}"></div>
<div class="modal">
    <!-- Could be <slot></slot> as well-->
    <header>
        <slot name="header" />
    </header>
    <div class="content">
        <!-- Any slot without a name becomes default slot or any data that doesn't have a name -->
        <slot />
    </div>
    <div class="disclaimer">
        <p>Before you close, you need to agree to our terms.</p>
        <button on:click="{() => agreed = true}">Agree</button>
    </div>
    <footer>
        <slot name="footer" didAgree={agreed}>
            <!-- Default set to Close text but can be changed on parent component -->
            <button on:click="{() => dispatch('close')}" disabled={!agreed}>Close</button> 
        </slot>
    </footer>
</div>