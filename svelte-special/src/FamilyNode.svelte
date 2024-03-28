<script>
    export let member;
</script>
<style>
    div {
        margin-left: 2rem;
    }
</style>
<div>
    <h1>{member.name}</h1>
    {#if member.isParent}
        <ul>
            {#each member.children as child}
                <svelte:self member={child} />
            {/each}
        </ul>
    {/if}
</div>