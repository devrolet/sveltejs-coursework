<script>
    import meetups from './Meetups/meetups-store.js';
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import MeetupDetail from './Meetups/MeetupDetail.svelte';
    import Button from './UI/Button.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';

    let loadedMeetups = meetups

    let editMode;
    let editedId;
    let page = 'overview';
    let pageData = {};

    const savedMeetup = (event) => {
        editMode = null;
        editedId = null;
        console.log('Meetup Added Successfully');
    }

    let cancelEdit = () => {
        editMode = null;
        editedId = null;
    }

    let showDetails = (event) => {
        page = 'details';
        pageData.id = event.detail;
    }

    let closeDetails = () => {
        page = 'overview';
        pageData = {};
        console.log('closed')
    }

    let startEdit = (event) => {
        editMode = 'edit';
        editedId = event.detail;
    }

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
    {#if page === 'overview'}
        <div class="meetup-controls">
            <Button on:click={() => (editMode = 'edit')}>New Meetup</Button>
        </div>
        {#if editMode === 'edit'}
            <EditMeetup id={editedId} on:save="{savedMeetup}" on:cancel={cancelEdit} />
        {/if}
        <MeetupGrid 
            meetups={$meetups} 
            on:showdetails={showDetails} 
            on:edit={startEdit} 
        />
    {:else}
        <MeetupDetail id={pageData.id} on:close={closeDetails} />
    {/if}
</main>