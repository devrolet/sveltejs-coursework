<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import Button from './UI/Button.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';

    let meetups = [
        {
            id: 'm1',
            title: 'Cooking Bootcamp',
            subtitle: "Learn to cook in 2 hours",
            description: 'In this meetup, we have master chefs and culinary experts to help guide you.',
            imageUrl: 'https://www.pexels.com/photo/spices-on-bowl-near-knife-on-chopping-boad-33242/',
            address: '1930 Studebaker Road, Atlanta, GA 30303',
            contactEmail: 'cookingboots@test.com',
            isFavorite: false
        },
        {
            id: 'm2',
            title: 'Music Production for Beginners',
            subtitle: "Learn how to make music in your bedroom",
            description: 'In this meetup, you\'ll learn the basics of music production',
            imageUrl: 'https://www.pexels.com/photo/photo-of-headphone-and-amplifier-2426085/',
            address: '8130 Olympic Way, Atlanta, GA 30303',
            contactEmail: 'beatmakers@test.com',
            isFavorite: false
        }
    ]

    let editMode;

    const addMeetup = (event) => {

        const newMeetup = {
            id: Math.random().toString(),
            title: event.detail.title,
            subtitle: event.detail.subtitle,
            description: event.detail.description,
            imageUrl: event.detail.imageUrl,
            contactEmail: event.detail.email,
            address: event.detail.address
        }

        meetups = [newMeetup, ...meetups];
        console.log('Meetup Added Successfully');
        editMode = null;
    }

    let toggleFavorite = event => {
        const id = event.detail;
        const updatedMeetup = { ...meetups.find(m => m.id === id) };
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
        const meetupIndex = meetups.findIndex(m => m.id === id);
        const updatedMeetups = [...meetups];
        updatedMeetups[meetupIndex] = updatedMeetup;
        meetups = updatedMeetups;
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
    <div class="meetup-controls">
        <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
    </div>
    {#if editMode === 'add'}
        <EditMeetup on:save="{addMeetup}" />
    {/if}
    <MeetupGrid {meetups} on:toggle-favorite="{toggleFavorite}" />
</main>