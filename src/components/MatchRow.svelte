<script lang="ts">
	export let matchNumber: number;
	export let redTeams: string[];
	export let blueTeams: string[];
</script>

<div class="row" id={`matchRow-${matchNumber}`}>
	<div class="matchNumber">{matchNumber}</div>
	<div class="red">{redTeams[0]}</div>
	<div class="red">{redTeams[1]}</div>
	<div class="red">{redTeams[2]}</div>
	<div class="blue">{blueTeams[0]}</div>
	<div class="blue">{blueTeams[1]}</div>
	<div class="blue">{blueTeams[2]}</div>
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
</style>
