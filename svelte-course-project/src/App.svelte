<script>
    import Header from './UI/Header.svelte';
    import MeetupItem from './Meetups/MeetupItem.svelte';

    const meetups = [
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
</script>
<style>
    #meetups {
        margin-top: 5rem;
    }
</style>

<Header />
<section id="meetups">
    {#each meetups as meetup}
        <MeetupItem 
            title={meetup.title}
            subtitle={meetup.subtitle}
            description={meetup.description}
            imageUrl={meetup.imageUrl}
            address={meetup.address}
            email={meetup.contactEmail}
        />
    {/each}
</section>