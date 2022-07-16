<script lang="ts">
	import type { Event_Simple } from 'tba-api-v3client-ts';
	export let eventCode: string;
	export let dark: boolean = false;

	let event: Event_Simple;

	$: loadEvent(eventCode);

	async function loadEvent(eventCode: string) {
		try {
			event = await fetch(`/api/eventDetails/${eventCode}`).then((res) => res.json());
		} catch (err) {
			console.error(err);
		}
	}
</script>

<div class="navbar" class:dark>
	<h2>{event ? event.name : '...'}</h2>
</div>

<style>
	.navbar {
		display: flex;
		background-color: #003974;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		color: white;
		text-align: center;
		justify-content: center;
		font-size: 14px;
	}
	h2 {
		margin: 0;
		padding: 0.75em;
	}

	.dark {
		background-color: #000000;
	}
</style>
