import Contador from './Contador.svelte';

const app = new Contador({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;