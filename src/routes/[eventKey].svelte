<script>
	import { onMount } from 'svelte';
	import Navbar from '../components/Navbar.svelte';
	import QueueingTable from '../components/QueueingTable.svelte';

	import { page } from '$app/stores';
	const dark = $page.url.searchParams.get('dark') !== null;
</script>

<Navbar eventCode={$page.params.eventKey} {dark} />
<QueueingTable eventCode={$page.params.eventKey} {dark} />
