<script>
    import { createEventDispatcher } from "svelte";
    import { scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import MeetupItem from "./MeetupItem.svelte";
    import MeetupFilter from "./MeetupFilter.svelte";
    import Button from "../UI/Button.svelte";

    export let meetups;

    const dispatch = createEventDispatcher();

    let favsOnly = false;

    $: filteredMeetups = favsOnly ? meetups.filter(m => m.isFavorite) : meetups;

    let setFilter = (event) => {
        favsOnly = event.detail === 1;
    }
</script>

<style>
    #meetups {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    #meetup-controls {
        margin: 1rem;
        display:flex;
        justify-content: space-between;
    }

    #no-meetups {
        margin: 1rem;
    }

    @media (min-width: 768px) {
        #meetups {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
<section id="meetup-controls">
    <MeetupFilter on:select={setFilter} />  
    <Button on:click={() => dispatch('add')}>New Meetup</Button> 
</section>
{#if filteredMeetups.length === 0}
    <p id="no-meetups">No meetups found, add meetups using the new meetup button</p>
{/if}
<section id="meetups">
    {#each filteredMeetups as meetup (meetup.id)}
        <div transition:scale animate:flip={{duration: 300}}>
            <MeetupItem 
                id={meetup.id}
                title={meetup.title}
                subtitle={meetup.subtitle}
                description={meetup.description}
                imageUrl={meetup.imageUrl}
                address={meetup.address}
                email={meetup.contactEmail}
                isFav={meetup.isFavorite}
                on:showdetails
                on:edit
            />
        </div>
    {/each}
</section>