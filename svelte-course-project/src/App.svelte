<script>
    import meetups from './Meetups/meetups-store.js';
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import Button from './UI/Button.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';

    let loadedMeetups = meetups

    let editMode;

    const addMeetup = (event) => {

        editMode = null;
        console.log('Meetup Added Successfully');
    }

    let cancelEdit = () => editMode = null;
</script>
<style>
    main {
        margin-top: 5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>

<Header />

<main>
    <div class="meetup-controls">
        <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
    </div>
    {#if editMode === 'add'}
        <EditMeetup on:save="{addMeetup}" on:cancel={cancelEdit} />
    {/if}
    <MeetupGrid meetups={$meetups} />
</main>