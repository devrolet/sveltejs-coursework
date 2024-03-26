import { writable } from 'svelte/store';

const meetups = writable([
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
]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
            id: Math.random().toString(),
            isFavorite: false
        }
        meetups.update(items => {
            return [newMeetup, ...items];
        })
    },
    updateMeetup: (id, meetupData) => {
        meetups.update(items => {
            const meetupIndex = items.findIndex(i => i.id === id);
            const updatedMeetup = { ...items[meetupIndex], ...meetupData };
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            console.log(updatedMeetups, id);
            return updatedMeetups;
        })
    },
    toggleFavorite: (id) => {
        meetups.update(items => {
            const updatedMeetup = { ...items.find(m => m.id === id) };
            updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
            const meetupIndex = items.findIndex(m => m.id === id);
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        });
    }
};

export default customMeetupsStore;