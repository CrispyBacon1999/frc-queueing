<script lang="ts">
	export let matchNumber: number;
	export let redTeams: string[];
	export let blueTeams: string[];
	export let dark: boolean = false;
</script>

<div class="row" id={`matchRow-${matchNumber}`}>
	<div class="matchNumber" class:dark>{matchNumber}</div>
	<div class="red" class:dark>{redTeams[0]}</div>
	<div class="red" class:dark>{redTeams[1]}</div>
	<div class="red" class:dark>{redTeams[2]}</div>
	<div class="blue" class:dark>{blueTeams[0]}</div>
	<div class="blue" class:dark>{blueTeams[1]}</div>
	<div class="blue" class:dark>{blueTeams[2]}</div>
</div>

<style>
	.row {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}

	.row div {
		padding: 1.5em 0.25em;
		text-align: center;
		font-size: calc(100vw / 35);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.matchNumber {
		border-bottom: 2px solid #d9d9d9;
	}

	.red {
		background-color: #fdd;
		border-bottom: 2px solid #e19292;
	}
	.blue {
		background-color: #ddf;
		border-bottom: 2px solid #8e8ef8;
	}

	.matchNumber.dark {
		/* background-color: #222222; */
		background-color: #000;
		color: white;
		font-weight: bold;
		border-bottom-color: #222;
	}
	.red.dark {
		/* background-color: #600606; */
		/* color: white; */
		background-color: #000;
		color: #bb1111;
		font-weight: bold;
		border-bottom-color: #320202;
	}
	.blue.dark {
		/* background-color: #0a0a64;
		color: white; */
		background-color: #000;
		color: #1414b5;
		font-weight: bold;
		border-bottom-color: #05053c;
	}
</style>
