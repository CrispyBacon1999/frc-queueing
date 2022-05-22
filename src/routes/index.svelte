<script lang="ts">
	let eventCode: string = '';
</script>

<div>
	<h1>FRC Queueing</h1>

	<p>
		Provides a queuing display for the pits that automatically scrolls to the latest match without
		scores.
	</p>

	<input placeholder="TBA Event Code" bind:value={eventCode} />
	<button
		disabled={eventCode.match(/\d{4}[\w\d]{3,8}/) === null}
		on:click={() => (window.location.href = `/${eventCode}`)}>Go to event</button
	>
</div>

<style>
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		text-align: center;
	}

	input {
		font-size: 18px;
		padding: 0.5em;
		border-radius: 8px;
	}

	button {
		font-size: 18px;
		padding: 0.75em;
		border-radius: 0;
		border: none;
		background-color: aqua;
	}

	button:hover {
		background-color: aquamarine;
		cursor: pointer;
	}

	button:disabled {
		background-color: lightblue;
	}
</style>
