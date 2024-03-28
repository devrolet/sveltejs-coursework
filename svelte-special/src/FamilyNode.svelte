<!-- Cross Component Scripts!! -->
<script context="module">
    console.log('Runs Once');

    let deactivateNode;
</script>

<script>
    export let member;

    let isActive;

    console.log('Runs multiple times');

    function deactivate() {
        isActive = false;
    }

    function activate() {
        if(deactivateNode) {
            deactivateNode();
        }
        isActive = true;
        deactivateNode = deactivate;
    }
</script>
<style>
    div {
        margin-left: 2rem;
    }

    .active {
        color: red;
    }
</style>
<div on:click={activate} class:active={isActive}>
    <h1>{member.name}</h1>
    {#if member.isParent}
        <ul>
            {#each member.children as child}
                <svelte:self member={child} />
            {/each}
        </ul>
    {/if}
</div>