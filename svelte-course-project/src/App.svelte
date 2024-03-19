<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import TextInput from './UI/TextInput.svelte';
    import Button from './UI/Button.svelte';

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

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>

<Header />

<main>
    <form on:submit|preventDefault="{addMeetup}">
        <TextInput 
            id="title" 
            label="Title" 
            value={title} 
            on:input={event => (title = event.target.value) } />
        <TextInput 
            id="subtitle" 
            label="Subtitle"
            value={subtitle} 
            on:input={event => (subtitle = event.target.value)} />
        <TextInput 
            id="imageUrl" 
            label="Image URL" 
            value={imageUrl} 
            on:input={event => (imageUrl = event.target.value)} />
        <TextInput 
            id="address" 
            label="Address" 
            value={address} 
            on:input={event => (address = event.target.value)} />
        <TextInput 
            id="email" 
            label="Email"
            type="email"
            value={email} 
            on:input={event => (email = event.target.value)} />
        <TextInput 
            id="description" 
            label="Description"
            controlType="textarea"
            value={description} 
            on:input={event => (description = event.target.value)} />
        <Button type="submit" caption="Save" />
    </form>
    <MeetupGrid {meetups} on:toggle-favorite="{toggleFavorite}" />
</main>