import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Chet Hill',
		age: 46,
		occupation: 'Developer'
	}
});

export default app;