<script>
    import meetups from './Meetups/meetups-store.js';
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import MeetupDetail from './Meetups/MeetupDetail.svelte';
    import Button from './UI/Button.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';
    import LoadingSpinner from './UI/LoadingSpinner.svelte';

    let editMode;
    let editedId;
    let page = 'overview';
    let pageData = {};
    let isLoading = true;

    fetch("https://meetup-svelte-app-default-rtdb.firebaseio.com/meetups.json")
        .then(res => {
            if(!res.ok) {
                throw new Error('Fetching meetups failed, please try again later');
            }
            return res.json();
        })
        .then(data => {
            const loadedMeetups = [];
            for(const key in data) {
                loadedMeetups.push({
                    ...data[key], 
                    id: key
                });
            }
            setTimeout(() => {
                isLoading = false;
               meetups.setMeetups(loadedMeetups.reverse()); 
            }, 1000);
            
        })
        .catch(err => {
            isLoading = false;
            console.log(err)
        })

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
</style>

<Header />

<main>
    {#if page === 'overview'}
        {#if editMode === 'edit'}
            <EditMeetup id={editedId} on:save="{savedMeetup}" on:cancel={cancelEdit} />
        {/if}
        {#if isLoading}
            <LoadingSpinner />
        {:else}
            <MeetupGrid 
                meetups={$meetups} 
                on:showdetails={showDetails} 
                on:edit={startEdit}
                on:add={() => {editMode = 'edit'}}
            />
        {/if}
    {:else}
        <MeetupDetail id={pageData.id} on:close={closeDetails} />
    {/if}
</main>