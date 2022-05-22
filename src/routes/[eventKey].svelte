<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Navbar from '../components/Navbar.svelte';
	import QueueingTable from '../components/QueueingTable.svelte';
</script>

<Navbar eventCode={$page.params.eventKey} />
<QueueingTable eventCode={$page.params.eventKey} />
