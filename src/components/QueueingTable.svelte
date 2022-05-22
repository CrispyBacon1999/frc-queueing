<script lang="ts">
	import MatchRow from './MatchRow.svelte';
	import type { Match_Simple } from 'tba-api-v3client-ts';
	import { onMount } from 'svelte';
	export let eventCode: string;

	let lastScrollIndex = -1;

	onMount(() => {
		loadMatches(eventCode);
		scrollToMatch();
		setInterval(() => {
			loadMatches(eventCode);
			console.log('Refreshing...');
			scrollToMatch();
		}, 15000);
	});

	function scrollToMatch() {
		console.log(matches);
		let nextMatchIndex = matches.findIndex((match) => {
			return match.alliances?.blue?.score === -1 || match.alliances?.red?.score === -1;
		});
		console.log(nextMatchIndex);
		nextMatchIndex = nextMatchIndex === -1 ? matches.length : nextMatchIndex;
		const table = document.getElementById('matchTable');
		const tableRow = document.getElementById(`matchRow-${nextMatchIndex}`);
		const y = tableRow ? tableRow?.getBoundingClientRect().y : 0;
		const tableY = table ? table?.getBoundingClientRect().y : 0;
		if (lastScrollIndex !== nextMatchIndex) {
			table?.scrollTo({ top: y - tableY, behavior: 'smooth' });
		}
		lastScrollIndex = nextMatchIndex;
	}

	let matches: Match_Simple[] = [];

	async function loadMatches(eventCode: string) {
		try {
			const matchList = fetch(`/api/matchList/${eventCode}`);
			matches = await matchList.then((res) => res.json());
		} catch (err) {
			console.error(err);
		}
	}
</script>

<div class="table" id="matchTable">
	{#each matches as match}
		<MatchRow
			matchNumber={match.match_number}
			redTeams={match.alliances.red.team_keys.map((x) => x.replace('frc', ''))}
			blueTeams={match.alliances.blue.team_keys.map((x) => x.replace('frc', ''))}
		/>
	{/each}
</div>

<style>
	.table {
		display: grid;
		grid-template-columns: 1fr;
		overflow: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.table::-webkit-scrollbar {
		display: none;
	}
</style>
