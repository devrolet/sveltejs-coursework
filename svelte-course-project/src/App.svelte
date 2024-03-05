<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';

    let title = '';
    let subtitle = '';
    let address = '';
    let email = '';
    let description = '';
    let imageUrl = '';

    let meetups = [
        {
            id: 'm1',
            title: 'Cooking Bootcamp',
            subtitle: "Learn to cook in 2 hours",
            description: 'In this meetup, we have master chefs and culinary experts to help guide you.',
            imageUrl: 'https://www.pexels.com/photo/spices-on-bowl-near-knife-on-chopping-boad-33242/',
            address: '1930 Studebaker Road, Atlanta, GA 30303',
            contactEmail: 'cookingboots@test.com'
        },
        {
            id: 'm2',
            title: 'Music Production for Beginners',
            subtitle: "Learn how to make music in your bedroom",
            description: 'In this meetup, you\'ll learn the basics of music production',
            imageUrl: 'https://www.pexels.com/photo/photo-of-headphone-and-amplifier-2426085/',
            address: '8130 Olympic Way, Atlanta, GA 30303',
            contactEmail: 'beatmakers@test.com'
        }
    ]

    const addMeetup = () => {
        const newMeetup = {
            id: Math.random().toString(),
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl,
            contactEmail: email,
            address: address
        }

        meetups = [newMeetup, ...meetups];
        console.log('Meetup Added Successfully');
    }
</script>
<style>
    main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
    <form on:submit|preventDefault="{addMeetup}">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value={title}>
        </div>
        <div class="form-control">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" bind:value={subtitle}>
        </div>
        <div class="form-control">
            <label for="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" bind:value={imageUrl}>
        </div>
        <div class="form-control">
            <label for="address">Address</label>
            <input type="text" id="address" bind:value={address}>
        </div>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" bind:value={email}>
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" bind:value={description}></textarea>
        </div>
        <button type="submit">Save</button>
    </form>
    <MeetupGrid {meetups} />
</main>